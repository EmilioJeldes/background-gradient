import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import Gradient from "../Gradient/Gradient";
import ColorPicker from "../ColorPicker/ColorPicker";
import Title from "../Text/Text";
import GeneratedCSS from "../GeneratedCSS/GeneratedCSS";
import NotSupported from "../NotSupported/NotSupported";

const styles = {
  container: {
    position: "relative",
    display: "flex",
    height: "100vh",
    width: "100vw",
    flexWrap: "wrap",
    flexDirection: "column",
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif;"
  }
};

class GradientGenerator extends Component {
  state = {
    gradient: {
      colors: [{ key: 1, color: "#1a9cff" }, { key: 2, color: "#cc00ff" }],
      degree: 90
    },
    message: ""
  };

  componentDidMount() {
    let isSafari =
      /Safari/.test(navigator.userAgent) &&
      /Apple Computer/.test(navigator.vendor);
    if (isSafari) {
      this.setState({
        message:
          "Input color no soportado en safari. Por favor usa Google Chrome, Firefox o Microsoft Edge"
      });
    }
  }

  handleOnColorChange = (e, key) => {
    this.setState(state => {
      let index = state.gradient.colors.findIndex(color => color.key === key);
      return {
        gradient: {
          ...state.gradient,
          colors: [
            ...state.gradient.colors.slice(0, index),
            { key, color: e.toString() },
            ...state.gradient.colors.slice(index + 1)
          ]
        }
      };
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <NotSupported message={this.state.message} />
        <Gradient gradient={this.state.gradient} />
        <Title />
        <ColorPicker
          gradient={this.state.gradient}
          onColorChange={this.handleOnColorChange}
        />
        <GeneratedCSS colors={this.state.gradient.colors} />
      </div>
    );
  }
}

GradientGenerator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GradientGenerator);
