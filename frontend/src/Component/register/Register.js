import React, {useState} from "react";
import classes from './Register.module.css'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Link from "@material-ui/core/Link";
import gql from 'graphql-tag'
import {useForm} from "../../Hooks/hooks"
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../Store/actions/actions";

const Register = (props) => {

  const dispatch = useDispatch()
  const initialState = {username: '', password: '', repeatPassword: ''}

  const error = useSelector(state => {
    return state.app.error
  })

  const loading = useSelector(state => {
    return state.app.loading
  })

  const registerUser = ()  => {
    dispatch(register(values, props.history))
  }

  const {handleChange, handleSubmit, values} = useForm(registerUser,
      initialState)

  let body = (
      <Grid container className={classes.form}>
        <Grid item sm/>
        <Grid item sm>
          <img className={classes.image}
               src="https://media.istockphoto.com/vectors/right-arrow-vector-icon-on-transparent-background-right-arrow-icon-vector-id1013490744"
               alt="monkey"/>
          <Typography variant="h3"
                      className={classes.pageTitle}>Register</Typography>
          <form noValidate onSubmit={handleSubmit}>
            <TextField id="username" name="username" type="text"
                       label="username"
                       className={classes.textField}
                       value={values.username} onChange={handleChange}
                       fullWidth/>
            <TextField id="password" name="password" type="password"
                       label="password" className={classes.textField}
                       value={values.password} onChange={handleChange}
                       fullWidth/>
            <TextField id="repeatPassword" name="repeatPassword" type="password"
                       label="repeatPassword" className={classes.textField}
                       value={values.repeatPassword} onChange={handleChange}
                       fullWidth/>
            <div className={classes.button}>
              <Button type="submit" variant="contained" disabled={false}
                      color="primary">{loading ? <CircularProgress color="secondary"/>
                  : 'Submit'}</Button>
            </div>
            <small><Link to="/login">LOGIN</Link></small>
          </form>
          {error && (<div className={classes.error}>
            <p>{error}</p>
          </div>)}
        </Grid>
        <Grid item sm/>
      </Grid>
  )

  if (false) {
    body = (<CircularProgress/>)
  }

  return (
      (body)
  )
}

const REGISTER_USER = gql`
    mutation register(
        $username: String!
        $password: String!
        $repeatPassword: String!
    ) {
        register(
            registerInput: {
                username: $username
                password: $password
                repeatPassword: $repeatPassword
            }
        ){
            id username createdAt token
        }
    }
`

export default Register;
