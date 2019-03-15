import {
  START_NEW_REACTION,
  SET_SELECTED_ELEMENT,
  ADD_ELEMENT,
  UPDATE_ADDED_ELEMENTS,
  SET_IS_REACTING
} from "./IonicReactionBasicActions";

interface State {
  selectedElement: string;
  addedElements: Array<any>;
  isReacting: boolean;
}

export const initialState = {
  selectedElement: "",
  addedElements: [],
  isReacting: false
};

export const reducer = (
  state: State,
  action: {
    type: string;
    payload: {
      selectedElement?: string;
      addedElements?: Array<any>;
      isReacting?: boolean;
    };
  }
) => {
  switch (action.type) {
    case START_NEW_REACTION:
      return {
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
        addedElements: action.payload.addedElements
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
    default:
      throw new Error();
  }
};
