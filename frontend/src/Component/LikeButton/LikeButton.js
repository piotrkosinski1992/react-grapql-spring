import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const LikeButton = (props) => {

  const manageVariant = () => {
    return props.isLiked ? "contained" : "outlined";
  }

  return (
      <div>
        <Typography color="textSecondary">Likes
          count {props.likeCount}</Typography>
        <Button variant={manageVariant()} color="primary" size="small"
                onClick={props.likePost}>{props.isLiked ? 'Unlike': 'Like'}</Button>
      </div>
  )
}

export default LikeButton
