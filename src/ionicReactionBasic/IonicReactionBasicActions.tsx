export const START_NEW_REACTION = "START_NEW_REACTION";
export const SET_SELECTED_ELEMENT = "SET_SELECTED_ELEMENT";
export const ADD_ELEMENT = "ADD_ELEMENT";
export const UPDATE_ADDED_ELEMENTS = "UPDATE_ADDED_ELEMENTS";
export const SET_IS_REACTING = "SET_IS_REACTING";
export const ADD_COMPLETED_REACTION = "ADD_COMPLETED_REACTION";
import { CompletedReaction } from "../types/reaction";

export const addCompletedReaction = (completedReaction: CompletedReaction) => {
  return {
    type: ADD_COMPLETED_REACTION,
    payload: {
      completedReaction
    }
  };
};
