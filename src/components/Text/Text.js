import React from "react";
import withStyles from "react-jss";

const styles = {
  titleContainer: {
    textAlign: "center",
  },
  title: {
    color: "#eee",
    textShadow: "1px .2px black",
    fontSize: "3em",
    marginTop: "2em"
  },
  subtitle: {
    color: "#444",
    fontSize: "2em",
    margin: 0
  }
};

const Text = ({ classes }) => {
  return (
    <div className={classes.titleContainer}>
      <h1 className={classes.title}>Simple Gradient Generator</h1>
      <h4 className={classes.subtitle}>Pick your colors</h4>
    </div>
  );
};

export default withStyles(styles)(Text);
