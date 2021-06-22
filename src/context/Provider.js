import React from "react";
import carContext from "./carContext";

class Provider extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
        signal: { color: 'red' },
    };
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        [car]: side,
      }
    })
  }

  changeSignal(color) {
    this.setState({
      signal: { color: color},
    })
  }
  render() {
    const { children } = this.props;
    const context = {
      ...this.state, moveCar: this.moveCar, changeSignal: this.changeSignal,
    }
    return(
      <carContext.Provider value={context}>
        {children}
      </carContext.Provider>
    );
  }
}

export default Provider;