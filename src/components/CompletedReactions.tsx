import React from "react";
import { CompletedReaction } from "../types/reaction";
import CompletedReactionItem from "./CompletedReactionItem";
type Props = {
  completedReactions: CompletedReaction[];
};

const CompletedReactions = ({ completedReactions }: Props) => {
  console.log("react", React);
  return (
    <div>
      <h4>Completed Reactions</h4>
      {completedReactions.length === 0 && <div>No Observed Reactions Yet</div>}
      {completedReactions.map(reaction => {
        const { elements, reactionResult } = reaction;
        return (
          <CompletedReactionItem
            elements={elements}
            reactionResult={reactionResult}
          />
        );
      })}
    </div>
  );
};

export default CompletedReactions;
