import React from 'react';
import Answer from './Answer';

const Answers = ({ answers, put }) => {
  return(
    <div className="answer-container">
      {answers.map((value, index) => {
        return <Answer content={value.content} key={index.toString()} nextId={value.nextId} put={put}/>
      })}
     
    </div>
  )
}


export default Answers;