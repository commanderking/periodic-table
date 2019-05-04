import {
  START_NEW_REACTION,
  SET_SELECTED_ELEMENT,
  ADD_ELEMENT,
  REMOVE_ELEMENT,
  SET_IS_REACTING,
  ADD_COMPLETED_REACTION,
  REMOVE_COMPLETED_REACTION
} from "./IonicReactionBasicActions";

import { CompletedReaction } from "../types/reaction";
import CompletedReactions from "../components/CompletedReactions";

interface State {
  selectedElement: string;
  addedElements: Array<any>;
  isReacting: boolean;
  completedReactions: CompletedReaction[];
  // How many reactions have happened since the user started this session
  reactionIndex: 0;
}

export const initialState = {
  selectedElement: "",
  addedElements: [],
  isReacting: false,
  completedReactions: [],
  reactionIndex: 0
};

export const reducer = (
  state: State,
  action: {
    type: string;
    payload: {
      selectedElement?: string;
      addedElement?: Array<any>;
      removedElement?: any;
      isReacting?: boolean;
      completedReaction?: CompletedReaction;
      reactionIndex?: number;
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
    case REMOVE_ELEMENT:
      const { removedElement } = action.payload;
      const indexToDelete = state.addedElements.findIndex((element: any) => {
        return removedElement.name === element.name;
      });

      // We can't simply filter because user might select two of the same element
      const updatedAddedElements = state.addedElements.filter(
        (element: any, index: number) => {
          return index !== indexToDelete;
        }
      );
      return {
        ...state,
        addedElements: updatedAddedElements
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
          {
            ...action.payload.completedReaction,
            reactionIndex: state.reactionIndex += 1
          }
        ]
      };
    case REMOVE_COMPLETED_REACTION:
      return {
        ...state,
        completedReactions: state.completedReactions.filter(
          reaction => reaction.reactionIndex !== action.payload.reactionIndex
        )
      };
    default:
      throw new Error();
  }
};
