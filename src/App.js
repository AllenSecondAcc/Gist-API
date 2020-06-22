import React, { Component } from "react";
import "./App.css";

import FetchApi from "./components/fetchapi";
import Title from "./components/title";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (  
      <div className="App">
        <Title />
        <FetchApi />
      </div>
    );
  }
}

export default App;