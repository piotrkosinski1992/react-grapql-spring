import React, {Fragment, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import PostCard from "../PostCard/PostCard";
import classes from "./Home.module.css"
import PostForm from "../PostForm/PostForm";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../Store/actions/actions";

const Home = (props) => {

  const dispatch = useDispatch()

  const authenticated = useSelector(state => {
    return state.app.authenticated
  })

  const loading = useSelector(state => {
    return state.app.loading
  })

  const posts = useSelector(state => {
    return state.app.posts
  })

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
      <Fragment>
        {authenticated && (
            <PostForm/>
        )}
        <div className={classes.container}>
          <Grid container spacing={2}>
            {loading ? (
                <h1>..Loading</h1>
            ) : (
                posts.map(post => (
                    <Grid key={post.id} item xs={3}>
                      <PostCard post={post} history={props.history}/>
                    </Grid>
                ))
            )}
          </Grid>
        </div>
      </Fragment>
  )
}

export default Home;
