import {
  START_NEW_REACTION,
  SET_SELECTED_ELEMENT,
  ADD_ELEMENT,
  UPDATE_ADDED_ELEMENTS,
  SET_IS_REACTING,
  ADD_COMPLETED_REACTION
} from "./IonicReactionBasicActions";

import { CompletedReaction } from "../types/reaction";

interface State {
  selectedElement: string;
  addedElements: Array<any>;
  isReacting: boolean;
  completedReactions: CompletedReaction[];
}

export const initialState = {
  selectedElement: "",
  addedElements: [],
  isReacting: false,
  completedReactions: []
};

export const reducer = (
  state: State,
  action: {
    type: string;
    payload: {
      selectedElement?: string;
      addedElement?: Array<any>;
      isReacting?: boolean;
      completedReaction?: CompletedReaction;
    };
  }
) => {
  switch (action.type) {
    case START_NEW_REACTION:
      return {
        ...state,
        selectedElement: "",
        addedElements: [],
        isReacting: false
      };
    case SET_SELECTED_ELEMENT:
      return {
        ...state,
        ...action.payload
      };
    case ADD_ELEMENT:
      return {
        ...state,
        addedElements: [...state.addedElements, action.payload.addedElement]
      };
    case UPDATE_ADDED_ELEMENTS:
      return {
        ...state,
        ...action.payload
      };
    case SET_IS_REACTING:
      return {
        ...state,
        ...action.payload
      };
    case ADD_COMPLETED_REACTION:
      return {
        ...state,
        completedReactions: [
          ...state.completedReactions,
          action.payload.completedReaction
        ]
      };
    default:
      throw new Error();
  }
};
