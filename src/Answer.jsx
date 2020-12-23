import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
  "button": {
      borderColor: "#66bfc3",
      color: "#66bfc3",
      fontWeight: 600,
      marginBottom: "8px",
      "&:hover": {
        backgroundColor: "#66bfc3",
        color: "#fff"
      }
    }
  });

const Answer = (props) => {
  const classes = useStyles();
return(
 
    <Button
     className={classes.button} variant="outlined"  onClick={() => props.select(props.content, props.nextId)}>
      {props.content}
    </Button>
 
  )
}

export default Answer;