import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import _ from "lodash";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
type Props = {
  addedElements: any;
  startNewReaction: any;
};
import AtomReactingState from "./AtomReactingState";

type ElementToDraw = {
  initXPos: number;
  yPos: number;
  radius: number;
  symbol: string;
  valenceElectrons: number;
  moveDirection: string; // update to enum
};

const reactionStates = {
  REACTING: "REACTING",
  NO_REACTION: "NO_REACTION",
  REACTION_SUCCESS: "REACTION_SUCCESS"
};

const AtomReactor = ({ addedElements, startNewReaction }: Props) => {
  const [reactionState, setReactionState] = useState(reactionStates.REACTING);

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
          <button onClick={startNewReaction}>Try Another Reaction</button>
        </div>
      )}
    </div>
  );
};
export default AtomReactor;
