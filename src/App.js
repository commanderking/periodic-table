import React, { Component } from "react";
import IonicReactionBasicContainer from "./ionicReactionBasic/IonicReactionBasicContainer";
import MolecularReactionContainer from "./molecularReaction/MolecularReactionContainer";
import "./App.css";
import { ReactionProvider } from "./stateManagement/ReactionContext";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    // Some awful emotion/typescript/react-app issue -
    // https://github.com/emotion-js/emotion/issues/1303
    window.React = React;
    return (
      <div className="App">
        <Router>
          <Route
            path="/activity/ionicReaction"
            exact
            render={() => {
              return (
                <ReactionProvider>
                  <IonicReactionBasicContainer />
                </ReactionProvider>
              );
            }}
          />
          <Route
            path="/activity/molecularReaction"
            exact
            render={() => {
              return (
                <ReactionProvider>
                  <MolecularReactionContainer />
                </ReactionProvider>
              );
            }}
          />
        </Router>
      </div>
    );
  }
}

export default App;
