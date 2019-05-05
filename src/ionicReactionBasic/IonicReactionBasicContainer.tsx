import React, { useEffect, useState, useReducer } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ElementGroup from "../components/ElementGroup";
import { useFetchElementsByMaxAtomicNumber } from "../requests/periodicTable";
import SelectedElementsPreview from "../components/SelectedElementsPreview";
import AtomReactor from "../components/AtomReactor";
import CompletedReactions from "../components/CompletedReactions";
import { reducer, initialState } from "./IonicReactionBasicReducer";
import {
  ReactionProvider,
  useReactionState
} from "../stateManagement/ReactionContext";
export const ReactionDispatch = React.createContext(null);

const IonicReactionBasicContainer = () => {
  const {
    selectedElement,
    addedElements,
    isReacting,
    completedReactions,
    dispatch
  } = useReactionState();

  const { isLoading, hasError, data } = useFetchElementsByMaxAtomicNumber(18);
  const hasSelectedMaxElements = addedElements.length === 2;

  if (isLoading) return <div>Loading ...</div>;

  return (
    <div
      css={css`
        padding: 10px;
      `}
    >
      {hasError && <div>Sorry, we could not get element data!</div>}
      <div
        id="ElementGroupExample"
        css={css`
          display: grid;
          grid-template-columns: 3fr 1fr 1fr 5fr 1fr 1fr 1fr;
        `}
      >
        <CompletedReactions completedReactions={completedReactions} />
        {[1, 2].map(columnNumber => (
          <ElementGroup
            // @ts-ignore
            elements={data[columnNumber] || []}
            selectedElement={selectedElement}
            hasSelectedMaxElements={hasSelectedMaxElements}
            id={`PeriodicTableColumn${columnNumber}`}
            key={`PeriodicTableColumn${columnNumber}`}
          />
        ))}
        <div id="ElementsPreview">
          {isReacting ? (
            <AtomReactor addedElements={addedElements} dispatch={dispatch} />
          ) : (
            <SelectedElementsPreview
              addedElements={addedElements}
              hasSelectedMaxElements={hasSelectedMaxElements}
              dispatch={dispatch}
            />
          )}
        </div>
        {[16, 17, 18].map(columnNumber => (
          <ElementGroup
            // @ts-ignore
            elements={data[columnNumber] || []}
            selectedElement={selectedElement}
            hasSelectedMaxElements={hasSelectedMaxElements}
            id={`PeriodicTableColumn${columnNumber}`}
            key={`PeriodicTableColumn${columnNumber}`}
          />
        ))}
      </div>
    </div>
  );
};

export default IonicReactionBasicContainer;
