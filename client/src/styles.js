import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => {
  return {
    appBar: {
      borderRadius: "30px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "0.1rem",
      marginTop: "2%",
      border: "2px solid #b8bfbd",
    },

    headerTitle: {
      color: "#24a2ec",
      marginRight: "2%",
    },

    grid: {
      marginTop: "10px",
    },
  };
});
