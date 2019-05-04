import React, { useContext } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { ReactionDispatch } from "../ionicReactionBasic/IonicReactionBasicContainer";
import { removeCompletedReaction } from "../ionicReactionBasic/IonicReactionBasicActions";
type Props = {
  elements: string[];
  reactionResult: string;
  reactionIndex: number;
};

const ReactionText: any = {
  NO_REACTION: "No Reaction",
  OUT_OF_SCOPE: "No observed results",
  REACTION_SUCCESS: "Successful Reaction"
};

const CompletedReactionItem = ({
  elements,
  reactionResult,
  reactionIndex
}: Props) => {
  const [firstElement, secondElement] = elements;
  const dispatch = useContext(ReactionDispatch);

  return (
    <div
      css={css`
        padding: 15px;
      `}
      key={`${firstElement}${secondElement}`}
    >
      <span>{firstElement}</span> +{" "}
      <span>
        {secondElement} --> {ReactionText[reactionResult]}{" "}
      </span>
      <button
        onClick={() => {
          // @ts-ignore
          dispatch(removeCompletedReaction(reactionIndex));
        }}
      >
        X
      </button>
    </div>
  );
};

export default CompletedReactionItem;
