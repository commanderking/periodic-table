import React, { useRef, useContext, useEffect } from "react";
import _ from "lodash";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { drawAtom } from "../utils/canvasAtomUtils";
type Props = {
  addedElements: any;
  setReactionState: Function;
};
import {
  canIonicReactionHappen,
  canMolecularReactionHappen,
  getAllAtomsInReaction
} from "../utils/ionicCompoundReactionUtils";
import { ReactionDispatch } from "../ionicReactionBasic/IonicReactionBasicContainer";
import { addCompletedReaction } from "../ionicReactionBasic/IonicReactionBasicActions";

const reactionStates = {
  REACTING: "REACTING",
  NO_REACTION: "NO_REACTION",
  OUT_OF_SCOPE: "OUT_OF_SCOPE",
  REACTION_SUCCESS: "REACTION_SUCCESS"
};

const AtomReactingState = ({ addedElements, setReactionState }: Props) => {
  const canvasWidth = 500;
  const canvasHeight = 300;

  const canvas = useRef(null);
  const atomSize = 30;

  const firstAtom = {
    initXPos: 25,
    yPos: 50,
    radius: atomSize,
    symbol: addedElements[0].symbol,
    valenceElectrons: _.last(addedElements[0].shells),
    ionicCharge: addedElements[0].ionicCharge,
    moveDirection: "RIGHT"
  };

  const secondAtom = {
    initXPos: canvasWidth - 25,
    yPos: 50,
    radius: atomSize,
    symbol: addedElements[1].symbol,
    valenceElectrons: _.last(addedElements[1].shells),
    ionicCharge: addedElements[1].ionicCharge,
    moveDirection: "LEFT"
  };

  const allAtoms = getAllAtomsInReaction(
    // @ts-ignore - thinks valenceElectrons can be null. Perhaps beacuse _.last in combination with getting 0th element in array
    firstAtom,
    secondAtom
  );

  const dispatch = useContext(ReactionDispatch);

  useEffect(() => {
    // @ts-ignore
    const context = canvas.current.getContext("2d");

    context.save();
    context.scale(1, 1);
    context.fillStyle = "#FFFFFF";

    var distanceElementMoved = 1;

    const drawReaction = window.setInterval(() => {
      if (distanceElementMoved < canvasWidth / 2 - atomSize * 3) {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        allAtoms.map(atom => {
          drawAtom(context, atom, distanceElementMoved);
        });
        distanceElementMoved += 0.5;
      } else {
        window.clearInterval(drawReaction);
        const [elementOne, elementTwo] = addedElements;
        const willIonicReactionHappen = canIonicReactionHappen(
          elementOne,
          elementTwo
        );

        const willMolecularReactionHappen = canMolecularReactionHappen(
          elementOne,
          elementTwo
        );

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
          }, 5000);
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
