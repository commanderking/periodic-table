import React from "react";
import { CompletedReaction } from "../types/reaction";

type Props = {
  completedReactions: CompletedReaction[];
};

const ReactionText: any = {
  NO_REACTION: "No Reaction"
};

const CompletedReactions = ({ completedReactions }: Props) => {
  return (
    <div>
      <div>Completed Reactions</div>
      {completedReactions.map(reaction => {
        const { elements, reactionResult } = reaction;
        return (
          <div key={`${elements[0] + elements[1]}`}>
            <span>{elements[0]}</span> +{" "}
            <span>
              {elements[1]} --> {ReactionText[reactionResult]}{" "}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CompletedReactions;
