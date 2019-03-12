import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import _ from "lodash";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { drawAtom } from "../utils/canvasAtomUtils";
type Props = {
  addedElements: any;
};
import { willIonicReactionHappen } from "../utils/ionicCompoundReactionUtils";
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

const AtomReactor = ({ addedElements }: Props) => {
  const [reactionState, setReactionState] = useState(reactionStates.REACTING);

  return (
    <div>
      {reactionState === reactionStates.REACTING && (
        <AtomReactingState
          addedElements={addedElements}
          setReactionState={setReactionState}
        />
      )}
      {reactionState === reactionStates.NO_REACTION && <div>No Reaction</div>}
    </div>
  );
};
export default AtomReactor;
