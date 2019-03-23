import React, { useEffect, useState, useReducer } from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ElementGroup from "../components/ElementGroup";
import { fetchPeriodicTableDataGroupedByColumn } from "../requests/periodicTable";
import SelectedElementsPreview from "../components/SelectedElementsPreview";
import AtomReactor from "../components/AtomReactor";
import CompletedReactions from "../components/CompletedReactions";
import { reducer, initialState } from "./IonicReactionBasicReducer";

export const ReactionDispatch = React.createContext(null);

const IonicReactionBasicContainer = () => {
  const [elementsByColumn, setElements] = useState({});
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    selectedElement,
    addedElements,
    isReacting,
    completedReactions
  } = state;

  const fetchDataAndUpdateElementsState = async () => {
    const periodicTableDataByColumn = await fetchPeriodicTableDataGroupedByColumn();
    await setElements(periodicTableDataByColumn);
  };

  useEffect(() => {
    fetchDataAndUpdateElementsState();
  }, []);

  const hasSelectedMaxElements = addedElements.length === 2;
  return (
    <ReactionDispatch.Provider value={dispatch}>
      <div>
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
              elements={elementsByColumn[columnNumber] || []}
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
              elements={elementsByColumn[columnNumber] || []}
              selectedElement={selectedElement}
              hasSelectedMaxElements={hasSelectedMaxElements}
              id={`PeriodicTableColumn${columnNumber}`}
              key={`PeriodicTableColumn${columnNumber}`}
            />
          ))}
        </div>
      </div>
    </ReactionDispatch.Provider>
  );
};

export default IonicReactionBasicContainer;
