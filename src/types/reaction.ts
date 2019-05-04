enum ReactionResult {
  SUCCESS = "SUCCESS",
  NO_REACTION = "NO_REACTION",
  OUT_OF_SCOPE = "OUT_OF_SCOPE" // Reaction that happens, but is not part of the experiment scope
}

export type CompletedReaction = {
  elements: Array<string>;
  reactionResult: string; //ReactionResult;
  reactionIndex: number;
};
