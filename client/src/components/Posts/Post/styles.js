import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  creationInfo: {
    position: "absolute",
    top: "10px",
    left: "15px",
    color: "white",
  },
  cardMedia: {
    height: 0,
    paddingTop: "56%",
  },

  cardContainer: {
    position: "relative",
    margin: "10px 10px",
    borderRadius: "10px",
  },
  verDotIconDIV: {
    position: "absolute",
    top: "10px",
    right: "-12px",
  },
  verDotIcon: {
    color: "white",
  },
  cardButtons: {
    display: "flex",
    justifyContent: "space-between",
  },
  BtnLike: {
    color: "#7383bb",
  },
  BtnDelete: {
    color: "#ff8e8e",
  },
  ButtonLikeOption: {
    color: "#7383bb",
    marginRight: "4px",
  },
  ButtonDeleteOption: {
    color: "#ff8e8e",
  },
  cardTitle: {
    marginLeft: "15px",
  },
  cardTags: {
    margin: "5px 0px",
  },
}));
