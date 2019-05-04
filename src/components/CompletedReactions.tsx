import React from "react";
import { CompletedReaction } from "../types/reaction";
import CompletedReactionItem from "./CompletedReactionItem";

type Props = {
  completedReactions: CompletedReaction[];
};

const CompletedReactions = ({ completedReactions }: Props) => {
  return (
    <div>
      <h4>Completed Reactions</h4>
      {completedReactions.length === 0 && <div>No Observed Reactions Yet</div>}
      {completedReactions.map(reaction => {
        const { elements, reactionResult, reactionIndex } = reaction;
        return (
          <CompletedReactionItem
            key={`$Reaction-${reactionIndex}`}
            elements={elements}
            reactionResult={reactionResult}
            reactionIndex={reactionIndex}
          />
        );
      })}
    </div>
  );
};

export default CompletedReactions;
