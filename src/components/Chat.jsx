import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/no-profile.png';
import Me from '../assets/img/Me.jpg';




const Chat = ({ text, type }) => {
  const isQuestion = (type === "question");
  const chat = isQuestion ? "chat" : "chat__reverse";
  const chatMesseage = isQuestion ? "messeage" : "messeage__reverse"

  return(
  <ListItem className={chat}>
    <ListItemAvatar >
      {isQuestion ? (
        <Avatar alt="icon" src={Me} />
      ) : (
        <Avatar ald="icon" src={NoProfile} />
      )}

    </ListItemAvatar>
    <div className={chatMesseage}>{text}</div>
  </ListItem>
  )
}

export default Chat;