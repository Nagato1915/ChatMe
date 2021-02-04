import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
  "button": {
      borderColor: "rgb(255, 54, 104)",
      color: "rgb(255, 54, 104)",
      fontWeight: 600,
      padding: "3px 1rem",
      marginTop: "8px",
      "&:hover": {
        backgroundColor: "rgb(255, 54, 104)",
        color: "#fff"
      }
    }
  });

const Answer = ({ content, nextId, put }) => {
  const classes = useStyles();
return(
 
    <Button
     className={classes.button} variant="outlined"  onClick={() => put(content, nextId)}>
      {content}
    </Button>
 
  )
}

export default Answer;