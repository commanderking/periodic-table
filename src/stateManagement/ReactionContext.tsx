import React, { useReducer, useContext } from "react";
import {
  reducer,
  initialState,
  State
} from "../ionicReactionBasic/IonicReactionBasicReducer";

const ReactionContext = React.createContext<
  { reactionState: State; dispatch: any } | undefined
>(undefined);

// TODO: No props as of now, but could be in the future
const ReactionProvider = (props: {}) => {
  const [reactionState, dispatch] = useReducer(reducer, initialState);

  const value = React.useMemo(() => {
    return {
      reactionState,
      dispatch
    };
  }, [reactionState]);

  //@ts-ignore
  return <ReactionContext.Provider value={value} {...props} />;
};

const useReactionState = () => {
  const context = useContext(ReactionContext);

  if (!context) {
    throw new Error(
      "useReactionState must be used within a ReactionContext Provider"
    );
  }

  const { reactionState, dispatch } = context;

  return { ...reactionState, dispatch };
};

export { ReactionProvider, useReactionState };
