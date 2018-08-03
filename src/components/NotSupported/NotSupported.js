import React from "react";
import withStyles from "react-jss";
import PropTypes from "prop-types";

const styles = {
  message: {
    backgroundColor: "rgba(255,255,255,0.5)",
    color: "black",
    borderRadius: 5,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    fontSize: '1.3em'

  }
};

const NotSupported = ({ message, classes }) => {
  return <div className={classes.message}>{message}</div>;
};

NotSupported.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired
};

export default withStyles(styles)(NotSupported);
