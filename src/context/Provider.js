import React, { useState } from "react";

import carContext from "./carContext";

function Provider ({children}) {


  const [ cars, setCars] = useState({red: false, blue: false, yellow: false});
  const [ signal, setSignal] = useState({color: 'red'});


  function moveCar(car, side) {
    setCars({[car]: side});
  }

  function changeSignal(color) {
    setSignal({color: color});
  }
    const context = {
      cars, signal , moveCar,  changeSignal: changeSignal,
    }
  
    return(
      <carContext.Provider value={context}>
        {children}
      </carContext.Provider>
    );
}


export default Provider;