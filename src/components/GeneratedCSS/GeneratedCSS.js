import React from "react";
import withStyles from "react-jss";
import PropTypes from "prop-types";

const styles = {
  container: {
    marginTop: ".5em",
    textAlign: "center",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "row wrap"
  },
  title: {
    flexBasis: "100%",
    padding: 0,
    margin: "0 0 .5em",
    textAlign: "center",
    color: "#444",
    fontSize: "1em"
  },
  cssWrapper: {
    padding: "1em",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px"
  },
  code: {
    margin: 0,
    padding: "0 1em",
    fontSize: "1em",
    color: "#ABB2BF",
    fontFamily: "Menlo, Consolas, Courier New, Monospace"
  },
  blue: {
    color: "#56B6C0",
    margin: 0,
    padding: 0
  },
  yellow: {
    color: "#CE8C55",
    margin: 0,
    padding: 0
  }
};

const GeneratedCSS = ({ classes, colors }) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Generated CSS:</h3>
      <div className={classes.cssWrapper}>
        <p className={classes.code}>
          background:
          <span className={classes.blue}> linear-gradient</span>(
          <span className={classes.yellow}>90deg</span>,
          <span className={classes.yellow}> #</span>
          <span className={classes.blue}>{colors[0].color.replace(/^#/, "")}</span>,
          <span className={classes.yellow}> #</span>
          <span className={classes.blue}>{colors[1].color.replace(/^#/, "")}</span>
          )
        </p>
      </div>
    </div>
  );
};

GeneratedCSS.propTypes = {
  classes: PropTypes.object.isRequired,
  colors: PropTypes.array.isRequired
};

export default withStyles(styles)(GeneratedCSS);
