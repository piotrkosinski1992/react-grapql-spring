import React, {useEffect} from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, like} from "../../Store/actions/actions";
import LikeButton from "../LikeButton/LikeButton";

const PostCard = ({post: {body, createdAt, id, username, likeCount, commentCount, likes}, history}) => {

  let isLiked = false;
  const dispatch = useDispatch()
  const authenticated = useSelector(state => {
    return state.app.authenticated
  })

  const loggedInUser = useSelector(state => {
    return state.app.user;
  })

  const userLikesPost = useSelector(state => {
    return loggedInUser && state.app.posts.filter(post => post.id === id)[0].likes.filter(like => like.username === loggedInUser.username).length === 1
  })

  useEffect(() => {
    isLiked = authenticated && likes.filter(
        like => like.username === user.username).length === 1;
  }, [likes])

  const user = useSelector(state => {
    return state.app.user
  })

  const onLikePost = () => {
    dispatch(like(id))
  }

  const commentOnPost = () => {
    history.push('/post/' + id)
  }

  const onDeletePost = () => {
    dispatch(deletePost(id))
  }

  return (
      <Card>
        <CardContent>
          <CardMedia
              component="img"
              height="70"
              src='https://react.semantic-ui.com/images/avatar/large/molly.png'
          />
          <Typography variant="h5" component="h2">
            {username}
          </Typography>
          <Typography color="textSecondary">
            <Link to={`/post/${id}`}>
              {new Date(createdAt).toLocaleString()}
            </Link>
          </Typography>
          <Typography variant="body2" component="p">
            {body}
            <br/>
          </Typography>
          <br/>
          <LikeButton likeCount={likeCount} isLiked={userLikesPost}
                      likePost={onLikePost}/>
          <Typography color="textSecondary">Comments
            count {commentCount}</Typography>
          <Button color="secondary" size="small"
                  onClick={commentOnPost}>Comment</Button>
        </CardContent>
        <CardActions>
          {authenticated && (user.username === username) && <Button
              color="inherit" size="small" variant="contained"
              onClick={onDeletePost}>Delete</Button>}
        </CardActions>
      </Card>
  )
}

export default PostCard;
