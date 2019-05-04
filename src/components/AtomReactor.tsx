import React, { useState } from "react";
import { startNewReaction } from "../ionicReactionBasic/IonicReactionBasicActions";

type Props = {
  addedElements: any;
  dispatch: any;
  replayMode?: boolean;
};
import AtomReactingState from "./AtomReactingState";

const reactionStates = {
  REACTING: "REACTING",
  NO_REACTION: "NO_REACTION",
  REACTION_SUCCESS: "REACTION_SUCCESS"
};

const AtomReactor = ({ addedElements, dispatch, replayMode }: Props) => {
  const [reactionState, setReactionState] = useState(reactionStates.REACTING);
  return (
    <div>
      {reactionState === reactionStates.REACTING && (
        <AtomReactingState
          addedElements={addedElements}
          setReactionState={setReactionState}
          replayMode={replayMode}
        />
      )}
      {!replayMode && reactionState === reactionStates.NO_REACTION && (
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
      {!replayMode && reactionState === reactionStates.REACTION_SUCCESS && (
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
