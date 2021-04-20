import "./App.css";
import { Container, Grid, Typography } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
//MakeStyle
import useStyles from "./styles";
//UseDispatch react-redux
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// Actions
import { getPosts } from "./actions/posts";
function App() {
  const dispatch = useDispatch();
  const clasess = useStyles();
  const currentId = useSelector((state) => state.currentId);

  const memoriesImg =
    "https://git.nkelemen.hu/uploads/-/system/project/avatar/72/memories.png";

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container>
      {/* Header*/}
      <AppBar className={clasess.appBar} color="inherit" position="static">
        <Typography className={clasess.headerTitle} align="center" variant="h3">
          Memories
        </Typography>
        <img src={memoriesImg} alt="memories" height="60" width="60" />
      </AppBar>

      {/* Body */}
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          className={clasess.grid}
        >
          {/* posts */}
          <Grid item xs={12} sm={12} md={8} lg={12}>
            <Posts />
          </Grid>
          {/* form */}
          <Grid item xs={12} sm={12} md={4} lg={6}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default App;
