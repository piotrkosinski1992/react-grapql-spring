import React from "react";
import classes from './Login.module.css'
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";
import {useForm} from "../../Hooks/hooks";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../Store/actions/actions";

const Login = (props) => {

  const dispatch = useDispatch()

  const error = useSelector(state => {
    return state.app.error
  })

  const loading = useSelector(state => {
    return state.app.loading
  })

  const signinUser = () => {
    dispatch(login(values, props.history))
  }

  const {handleChange, handleSubmit, values} = useForm(signinUser,
      {username: 'Piotrek1992', password: 'password'})

  let body = (
      <Grid container className={classes.form}>
        <Grid item sm/>
        <Grid item sm>
          <img className={classes.image}
               src="https://media.istockphoto.com/vectors/right-arrow-vector-icon-on-transparent-background-right-arrow-icon-vector-id1013490744"
               alt="monkey"/>
          <Typography variant="h3"
                      className={classes.pageTitle}>Login</Typography>
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
            <div className={classes.button}>
              <Button type="submit" variant="contained" disabled={false}
                      color="primary">{loading ? <CircularProgress
                      color="secondary"/>
                  : 'Submit'}</Button>
            </div>
            <small><Link to="/register">REGISTER</Link></small>
          </form>
          {error && (<div className={classes.error}>
            <p>{error}</p>
          </div>)}
        </Grid>
        <Grid item sm/>
      </Grid>
  )

  return (
      (body)
  )
}

export default Login;
