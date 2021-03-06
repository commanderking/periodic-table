import { CompletedReaction } from "../types/reaction";
import { ElementWithReactionBehavior } from "../types/element";

export const START_NEW_REACTION = "START_NEW_REACTION";
export const SET_SELECTED_ELEMENT = "SET_SELECTED_ELEMENT";
export const ADD_ELEMENT = "ADD_ELEMENT";
export const REMOVE_ELEMENT = "REMOVE_ELEMENT";
export const SET_IS_REACTING = "SET_IS_REACTING";
export const ADD_COMPLETED_REACTION = "ADD_COMPLETED_REACTION";
export const REMOVE_COMPLETED_REACTION = "REMOVE_COMPLETED_REACTION";

export const addElement = (element: ElementWithReactionBehavior) => ({
  type: ADD_ELEMENT,
  payload: { addedElement: element }
});

export const addCompletedReaction = (completedReaction: {
  elements: any[];
  reactionResult: string;
}) => {
  return {
    type: ADD_COMPLETED_REACTION,
    payload: {
      completedReaction
    }
  };
};

export const startNewReaction = () => ({
  type: START_NEW_REACTION,
  payload: {}
});

export const setIsReacting = (isReacting: boolean) => ({
  type: SET_IS_REACTING,
  payload: { isReacting }
});

export const setSelectedElement = (selectedElement: string) => ({
  type: SET_SELECTED_ELEMENT,
  payload: { selectedElement }
});

export const removeElement = (element: ElementWithReactionBehavior) => {
  return {
    type: REMOVE_ELEMENT,
    payload: { removedElement: element }
  };
};

export const removeCompletedReaction = (reactionIndex: number) => ({
  type: REMOVE_COMPLETED_REACTION,
  payload: { reactionIndex }
});
