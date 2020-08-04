import React, {Fragment, useEffect} from "react";
import classes from "./PostCardDetails.module.css"
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Comments from "../Comments/Comments";
import CircularProgress from "@material-ui/core/CircularProgress";
import {comment, getPosts} from "../../Store/actions/actions";

export const PostCardDetails = (props) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  const post = useSelector(state => {
    return state.app.posts.filter(post => post.id === props.match.params.id)[0];
  })

  const commentSubmit = (body) => {
    dispatch(comment(props.match.params.id, body, props.history))
  }

  let body = <CircularProgress/>

  if (post) {
    body = (
        <Fragment>
          <Paper className={classes.container}>
            <CardMedia
                component="img"
                height="70"
                src='https://react.semantic-ui.com/images/avatar/large/molly.png'
            />
            <Typography variant="h5" component="h2">
              {post.username}
            </Typography>
            <Typography color="textSecondary">
              {new Date(post.createdAt).toLocaleString()}
            </Typography>
            <Typography variant="body2" component="p">
              {post.body}
              <br/>
            </Typography>
          </Paper>
          <Comments comments={post.comments} commentSubmit={commentSubmit}/>
        </Fragment>
    )
  }

  return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              {body}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default PostCardDetails
