import React, { useState } from "react";
import { startNewReaction } from "../ionicReactionBasic/IonicReactionBasicActions";

type Props = {
  addedElements: any;
  dispatch: any;
};
import AtomReactingState from "./AtomReactingState";

const reactionStates = {
  REACTING: "REACTING",
  NO_REACTION: "NO_REACTION",
  REACTION_SUCCESS: "REACTION_SUCCESS"
};

const AtomReactor = ({ addedElements, dispatch }: Props) => {
  const [reactionState, setReactionState] = useState(reactionStates.REACTING);
  console.log("react", React);
  return (
    <div>
      {reactionState === reactionStates.REACTING && (
        <AtomReactingState
          addedElements={addedElements}
          setReactionState={setReactionState}
        />
      )}
      {reactionState === reactionStates.NO_REACTION && (
        <div>
          <h1>No Reaction</h1>
          <button
            onClick={() => {
              dispatch(startNewReaction());
            }}
          >
            Try Another Reaction
          </button>
        </div>
      )}
      {reactionState === reactionStates.REACTION_SUCCESS && (
        <div>
          <h1>Successful Reaction</h1>
          <button
            onClick={() => {
              dispatch(startNewReaction());
            }}
          >
            Try Another Reaction
          </button>
        </div>
      )}
    </div>
  );
};
export default AtomReactor;
