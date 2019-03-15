import React, { useEffect, useState, useReducer } from "react";
import ElementGroup from "../components/ElementGroup";
import { fetchPeriodicTableDataGroupedByColumn } from "../requests/periodicTable";
import SelectedElementsPreview from "../components/SelectedElementsPreview";
import AtomReactor from "../components/AtomReactor";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { reducer, initialState } from "./IonicReactionBasicReducer";
import {
  START_NEW_REACTION,
  SET_SELECTED_ELEMENT,
  ADD_ELEMENT,
  UPDATE_ADDED_ELEMENTS,
  SET_IS_REACTING
} from "./IonicReactionBasicActions";

const IonicReactionBasicContainer = () => {
  const [elementsByColumn, setElements] = useState({});
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedElement, addedElements, isReacting } = state;

  const addElement = (element: Object) => {
    dispatch({
      type: ADD_ELEMENT,
      payload: { addedElements: [...state.addedElements, element] }
    });
  };

  const startNewReaction = () => {
    dispatch({ type: START_NEW_REACTION, payload: {} });
  };

  const removeElement = (element: any) => {
    const indexToDelete = addedElements.findIndex((addedElement: any) => {
      return element.name === addedElement.name;
    });

    const updatedAddedElements = addedElements.filter(
      (element: any, index: number) => {
        return index !== indexToDelete;
      }
    );
    dispatch({
      type: UPDATE_ADDED_ELEMENTS,
      payload: { addedElements: updatedAddedElements, selectedElement: "" }
    });
  };

  const setSelectedElement = (selectedElement: string) => {
    dispatch({ type: SET_SELECTED_ELEMENT, payload: { selectedElement } });
  };

  const setIsReacting = (isReacting: boolean) => {
    dispatch({ type: SET_IS_REACTING, payload: { isReacting } });
  };

  const fetchDataAndUpdateElementsState = async () => {
    const periodicTableDataByColumn = await fetchPeriodicTableDataGroupedByColumn();
    await setElements(periodicTableDataByColumn);
  };

  useEffect(() => {
    fetchDataAndUpdateElementsState();
  }, []);

  const hasSelectedMaxElements = addedElements.length === 2;
  return (
    <div
      id="ElementGroupExample"
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr 5fr 1fr 1fr 1fr;
      `}
    >
      {[1, 2].map(columnNumber => (
        <ElementGroup
          // @ts-ignore
          elements={elementsByColumn[columnNumber] || []}
          selectedElement={selectedElement}
          setElement={setSelectedElement}
          addElement={addElement}
          hasSelectedMaxElements={hasSelectedMaxElements}
          id={`PeriodicTableColumn${columnNumber}`}
          key={`PeriodicTableColumn${columnNumber}`}
        />
      ))}
      <div id="ElementsPreview">
        {isReacting ? (
          <AtomReactor
            addedElements={addedElements}
            startNewReaction={startNewReaction}
          />
        ) : (
          <SelectedElementsPreview
            addedElements={addedElements}
            removeElement={removeElement}
            hasSelectedMaxElements={hasSelectedMaxElements}
            setIsReacting={setIsReacting}
          />
        )}
      </div>{" "}
      {[16, 17, 18].map(columnNumber => (
        <ElementGroup
          // @ts-ignore
          elements={elementsByColumn[columnNumber] || []}
          selectedElement={selectedElement}
          setElement={setSelectedElement}
          addElement={addElement}
          hasSelectedMaxElements={hasSelectedMaxElements}
          id={`PeriodicTableColumn${columnNumber}`}
          key={`PeriodicTableColumn${columnNumber}`}
        />
      ))}
    </div>
  );
};

export default IonicReactionBasicContainer;
