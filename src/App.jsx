import React, { useState, useEffect, useCallback } from 'react';
import chatData from './chat-data';
import './assets/styles/style.css';
import { Answers, Chats, Header, PhoneTop, PhoneBottom } from './components';
import FormDialog from "./components/Forms/FormDialog";


const App = () => {

  const [ answers, setAnswers ] = useState([]);
  const [ chats, setChats ] = useState([]);
  const [ currentId, setCurrentId ] = useState('init');
  const [ data, setData ] = useState(chatData);
  const [ open, setOpen ] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [setOpen]);

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen]);

  const addChats = useCallback((chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
    })
  }, [setChats]);

  const nextQuestion = (nextQuestionId) => {
    addChats({
      text: chatData[nextQuestionId].question,
      type: 'question'
    })
    setAnswers(chatData[nextQuestionId].answers);
    setCurrentId(nextQuestionId)
  };

  const putAnswer = (putAnswer, nextQuestionId) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        setTimeout(() => nextQuestion(nextQuestionId), 1000);
      break;
      case (nextQuestionId === 'contact'):
        handleOpen();
      break;
      case (/^https:*/.test(nextQuestionId)):
        var a  = document.createElement('a');
        a.href = nextQuestionId;
        a.target = 'blank';
        a.click();
      break;
      default:
        addChats({
          text: putAnswer,
          type: 'answer'
        });
        setTimeout(() => nextQuestion(nextQuestionId), 1000)
      break;
    }
  }

  useEffect(() => {
    const initAnswer = "";
    putAnswer(initAnswer, currentId)
  }, []);

  useEffect(() => {
    const scrollArea = document.getElementById("scrollarea");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  })



  return(
    <section className="chat-container">
        <div className="phone-box">
          <PhoneTop />
          <div className="phone-inner">
            <Header />
            <Chats chats={chats}/>
            <Answers answers={answers} put={putAnswer}/>
            <FormDialog open={open} handleClose={handleClose} />
          </div>
          <PhoneBottom />
        </div>
    </section>
  )
}

export default App;
