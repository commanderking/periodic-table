import React, { useRef, useEffect } from "react";
import _ from "lodash";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { drawAtom } from "../utils/canvasAtomUtils";
import { useReactionState } from "../stateManagement/ReactionContext";

import {
  canIonicReactionHappen,
  canMolecularReactionHappen,
  getAllAtomsInReaction
} from "../utils/ionicCompoundReactionUtils";
import { addCompletedReaction } from "../ionicReactionBasic/IonicReactionBasicActions";
import { RADIUS_SCALE_DOWN_FACTOR } from "../constants/Atoms";
const paddingFromCanvasCenterForAtomsToStop = 100;

const reactionStates = {
  REACTING: "REACTING",
  NO_REACTION: "NO_REACTION",
  OUT_OF_SCOPE: "OUT_OF_SCOPE",
  REACTION_SUCCESS: "REACTION_SUCCESS"
};

const moveDirection = {
  LEFT: "LEFT",
  RIGHT: "RIGHT"
};

type Props = {
  addedElements: any;
  setReactionState: Function;
  replayMode?: boolean;
};

const AtomReactingState = ({
  addedElements,
  setReactionState,
  replayMode
}: Props) => {
  const canvasWidth = 500;
  const canvasHeight = 300;

  const canvas = useRef(null);

  const [firstElement, secondElement] = addedElements;

  const firstAtom = {
    initXPos: 25,
    yPos: canvasHeight / 2,
    radius: firstElement.radius / RADIUS_SCALE_DOWN_FACTOR,
    symbol: firstElement.symbol,
    valenceElectrons: _.last(firstElement.shells),
    ionicCharge: firstElement.ionicCharge,
    moveDirection: moveDirection.RIGHT
  };

  const secondAtom = {
    initXPos: canvasWidth - 25,
    yPos: canvasHeight / 2,
    radius: secondElement.radius / RADIUS_SCALE_DOWN_FACTOR,
    symbol: secondElement.symbol,
    valenceElectrons: _.last(secondElement.shells),
    ionicCharge: secondElement.ionicCharge,
    moveDirection: moveDirection.LEFT
  };

  const willIonicReactionHappen = canIonicReactionHappen(
    firstElement,
    secondElement
  );

  const allAtoms = getAllAtomsInReaction(
    // @ts-ignore - thinks valenceElectrons can be null. Perhaps beacuse _.last in combination with getting 0th element in array
    firstAtom,
    secondAtom,
    willIonicReactionHappen
  );

  const { dispatch } = useReactionState();

  useEffect(() => {
    // @ts-ignore
    const context = canvas.current.getContext("2d");

    context.save();
    context.scale(1, 1);
    context.fillStyle = "#FFFFFF";

    var distanceElementMoved = 1;

    const drawReaction = window.setInterval(() => {
      // Keep drawing if atoms are not close enough
      if (
        distanceElementMoved <
        canvasWidth / 2 - paddingFromCanvasCenterForAtomsToStop
      ) {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        allAtoms.map(atom => {
          drawAtom(context, atom, distanceElementMoved);
        });
        distanceElementMoved += 0.5;
      } else {
        window.clearInterval(drawReaction);

        const willMolecularReactionHappen = canMolecularReactionHappen(
          firstElement,
          secondElement
        );

        // ReplayMode is if we're just playing the reaction back. In that case, we shouldn't
        // need to change anything about the completed reactions or reaction state

        if (replayMode) {
          return;
        }

        // If ionic and molecular reaction won't happen, definitely assert no reaction
        if (!willIonicReactionHappen && !willMolecularReactionHappen) {
          setTimeout(() => {
            setReactionState(reactionStates.NO_REACTION);
            // @ts-ignore - how can dispatch be null?
            dispatch(
              addCompletedReaction({
                elements: [firstAtom.symbol, secondAtom.symbol],
                reactionResult: reactionStates.NO_REACTION
              })
            );
          }, 2000);
          return;
        }

        // If molecular reaction can happen, it's out of scope of this experiment
        if (!willIonicReactionHappen && willMolecularReactionHappen) {
          setTimeout(() => {
            // Move electrons around

            setReactionState(reactionStates.NO_REACTION);
            // @ts-ignore - how can dispatch be null?
            dispatch(
              addCompletedReaction({
                elements: [firstAtom.symbol, secondAtom.symbol],
                reactionResult: reactionStates.OUT_OF_SCOPE
              })
            );
          }, 2000);
          return;
        }

        // If ionic reaction happens, let's show successful reaction:
        if (willIonicReactionHappen) {
          context.clearRect(0, 0, canvasWidth, canvasHeight);

          // Clear out the electrons on the atom losing electrons
          const newAtomsAfterReaction = allAtoms.map(atom => {
            return {
              ...atom,
              // Atom will either lose or gain electrons to form complete outer shell
              valenceElectrons: atom.ionicCharge > 0 ? 0 : 8
            };
          });

          newAtomsAfterReaction.map(atom => {
            drawAtom(context, atom, distanceElementMoved, true);
          });

          setTimeout(() => {
            setReactionState(reactionStates.REACTION_SUCCESS);
            // @ts-ignore - how can dispatch be null?
            dispatch(
              addCompletedReaction({
                elements: [firstAtom.symbol, secondAtom.symbol],
                reactionResult: reactionStates.REACTION_SUCCESS
              })
            );
          }, 2000);
          return;
        }
      }
    }, 0);
  });
  return (
    <div>
      <h1>Reacting...</h1>
      <canvas
        width={canvasWidth}
        height={canvasHeight}
        ref={canvas}
        css={css`
          border: 1px solid black;
        `}
      />
    </div>
  );
};
export default AtomReactingState;
