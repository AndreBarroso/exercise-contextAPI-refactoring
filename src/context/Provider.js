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
    };
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        [car]: side,
      }
    })
  }
  render() {
    const { children } = this.props;
    const context = {
      ...this.state, moveCar: this.moveCar,
    }
    return(
      <carContext.Provider value={context}>
        {children}
      </carContext.Provider>
    );
  }
}

export default Provider;