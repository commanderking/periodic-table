import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type Props = {
  elements: string[];
  reactionResult: string;
};

const ReactionText: any = {
  NO_REACTION: "No Reaction",
  OUT_OF_SCOPE: "No observed results",
  REACTION_SUCCESS: "Successful Reaction"
};

const CompletedReactionItem = ({ elements, reactionResult }: Props) => {
  const [firstElement, secondElement] = elements;
  return (
    <div
      css={css`
        padding: 15px;
      `}
      key={`${firstElement + secondElement}`}
    >
      <span>{firstElement}</span> +{" "}
      <span>
        {secondElement} --> {ReactionText[reactionResult]}{" "}
      </span>
    </div>
  );
};

export default CompletedReactionItem;
