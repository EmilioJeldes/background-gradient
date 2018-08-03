import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

const styles = {
  pickerContainer: {
    textAlign: "center",
    marginTop: '.5em'
  },
  picker: {
    margin: 5
  }
};

const ColorPicker = ({ gradient, classes, onColorChange }) => {
  const renderPickers = gradient.colors.map(({ key, color }) => (
    <input
      className={classes.picker}
      type="color"
      value={color}
      key={key}
      onChange={e => onColorChange(e.target.value, key)}
    />
  ));
  return <div className={classes.pickerContainer}>{renderPickers}</div>;
};

ColorPicker.propTypes = {
  gradient: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ColorPicker);
