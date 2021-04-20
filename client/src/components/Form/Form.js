import React, { useState, useEffect } from "react";
//material-ui
import { Paper, TextField, Typography, Button } from "@material-ui/core";
// FileBase
import FileBase from "react-file-base64";
//import makeStyles
import useStyles from "./styles";
//Redux
import { useDispatch, useSelector } from "react-redux";

import { createPost, updatePost } from "../../actions/posts";
//import posts  function
import { getPosts } from "../../actions/posts";

function Form() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentId = useSelector((state) => state.currentId.id);
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    if (post) setPostData(post);
    // return () => {};
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    dispatch(getPosts());
    clearform();
  };

  const clearform = () => {
    dispatch({ type: "SET_ID", payload: null });
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper} elevation={3}>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" align="center">
          {currentId ? "Editing" : "Creating"} a Memory
        </Typography>
        <TextField
          className={classes.mbSmall}
          label="Creator"
          variant="outlined"
          size="small"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        ></TextField>
        <TextField
          className={classes.mbSmall}
          label="title"
          variant="outlined"
          size="small"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ></TextField>
        <TextField
          className={classes.mbSmall}
          label="message"
          variant="outlined"
          size="small"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        ></TextField>
        <TextField
          className={classes.mbSmall}
          label="tags"
          variant="outlined"
          size="small"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        ></TextField>
        <div className={classes.mbSmall}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className={classes.buttons}>
          <Button
            color="primary"
            variant="contained"
            size="medium"
            type="submit"
          >
            Submit
          </Button>
          <Button
            color="secondary"
            variant="contained"
            size="medium"
            onClick={clearform}
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export default Form;
