import React from "react";
//material-ui
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import moment from "moment";
import useStyles from "./styles";
//Icons
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
//useDispatch
import { useDispatch } from "react-redux";
//import action
import { currentID, deletePost, likePost } from "../../../actions/posts";
//import posts  function
import { getPosts } from "../../../actions/posts";

function Post({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const EditHandler = (e) => {
    dispatch(currentID(post._id));
  };

  return (
    <div>
      <Card className={classes.cardContainer}>
        <CardMedia
          image={post.selectedFile}
          title={post.title}
          className={classes.cardMedia}
        />
        <div className={classes.creationInfo}>
          <Typography variant="body1">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.verDotIconDIV}>
          <Button size="small" onClick={EditHandler}>
            <MoreVertIcon className={classes.verDotIcon} />
          </Button>
        </div>
        <Typography
          className={classes.cardTags}
          variant="body2"
          color="textSecondary"
          align="center"
        >
          {post.tags}
        </Typography>
        <Typography variant="h6" className={classes.cardTitle}>
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {post.message}
          </Typography>
        </CardContent>

        <CardActions className={classes.cardButtons}>
          <Button
            className={classes.BtnLike}
            onClick={() => {
              dispatch(likePost(post._id));
              dispatch(getPosts());
            }}
          >
            <ThumbUpAltOutlinedIcon className={classes.ButtonLikeOption} />
            &nbsp; LIKE &nbsp;
            {post.likeCount}
          </Button>
          <Button
            className={classes.BtnDelete}
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteOutlineOutlinedIcon className={classes.ButtonDeleteOption} />
            &nbsp; DELETE &nbsp;
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Post;
