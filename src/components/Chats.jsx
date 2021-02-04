import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Chat from './Chat';



const useStyles = makeStyles({
  chats: {
    height: 406,
    padding: "10px 0 0 0",
    overflow: "auto",
    boxSizing: "border-box"
  }
});

const Chats = ({ chats }) => {
  const classes = useStyles();

  return(
    <List className={classes.chats} id={"scrollarea"}>
     {chats.map((chat, index) => {
       return <Chat text={chat.text} type={chat.type} key={index.toString()}/>
      })}
    </List>
  )
}

export default Chats;