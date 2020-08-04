import React from "react";
import classes from "./PostForm.module.css"
import Button from "@material-ui/core/Button";
import {useForm} from "../../Hooks/hooks";
import TextField from "@material-ui/core/TextField";
import {useDispatch} from "react-redux";
import {addPost} from "../../Store/actions/actions";

const PostForm = (props) => {

  const dispatch = useDispatch()

  const createPost = () => {
    dispatch(addPost(values))
  }

  const {handleChange, handleSubmit, values} = useForm(createPost,
      {body: 'Bla bla bla'})

  return (
      <form onSubmit={handleSubmit}>
        <div className={classes.container}>
          <h2>Create post</h2>
          <TextField onChange={handleChange} name="body" value={values.body}
                     fullWidth className={classes.textField}/>
          <Button type="submit" variant="contained">Submit</Button>
        </div>
      </form>
  )
}

export default PostForm;
