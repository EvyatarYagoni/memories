import React from "react";
import Post from "./Post/Post";
//useSelector
import { useSelector } from "react-redux";
//material-ui
import { Grid, CircularProgress } from "@material-ui/core";
//makeStyle
import useStyles from "./styles";

function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();
  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid container className={classes.gridContainer} alignItems="stretch">
          {posts.map((post) => (
            <Grid item key={post._id} xs={12} sm={6} md={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default Posts;
