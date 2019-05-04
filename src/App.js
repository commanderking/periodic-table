import React, { Component } from "react";
import IonicReactionBasicContainer from "./ionicReactionBasic/IonicReactionBasicContainer";
import "./App.css";
import { ReactionProvider } from "./stateManagement/ReactionContext";
class App extends Component {
  render() {
    // Some awful emotion/typescript/react-app issue -
    // https://github.com/emotion-js/emotion/issues/1303
    window.React = React;

    return (
      <div className="App">
        <ReactionProvider>
          <IonicReactionBasicContainer />
        </ReactionProvider>
      </div>
    );
  }
}

export default App;
