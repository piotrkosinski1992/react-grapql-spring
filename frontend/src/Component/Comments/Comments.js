import React, {Fragment, useState} from "react";
import TextField from "@material-ui/core/TextField";
import classes from "./Comments.module.css"
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export const Comments = (props) => {

  const [comment, setComment] = useState('')

  const handleChange = (event) => {
    setComment(event.target.value)
  }

  return (
    <Fragment>
      {props.comments.map(comment => (
        <Paper key={comment.id}>
          <Typography variant="h5">{comment.username}</Typography>
          <Typography color="textSecondary">{comment.createdAt}</Typography>
          <div>{comment.body}</div>
        </Paper>
      ))}

      <Paper className={classes.container}>
        <TextField onChange={handleChange}
                   fullWidth className={classes.textField}/>
        <Button type="submit" variant="contained" onClick={() => props.commentSubmit(comment)}>Submit</Button>
      </Paper>
    </Fragment>
  )
}

export default Comments
