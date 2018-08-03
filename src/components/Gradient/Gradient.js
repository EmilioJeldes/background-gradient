import React from "react";
import PropTypes from "prop-types";

const styles = {
  gradient: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: "-10"
  }
};

const Gradient = ({ gradient }) => {
  let colors = "";
  gradient.colors.forEach(({ color }) => {
    colors += ", " + color;
  });

  const inlineStyles = {
    ...styles.gradient,
    background: `linear-gradient(${gradient.degree}deg${colors})`
  };

  return <div style={inlineStyles} />;
};

Gradient.propTypes = {
  gradient: PropTypes.object.isRequired
};

export default Gradient;
