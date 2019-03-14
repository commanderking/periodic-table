import React, { useEffect, useState, useReducer } from "react";
import ElementGroup from "../components/ElementGroup";
import { fetchPeriodicTableDataGroupedByColumn } from "../requests/periodicTable";
import SelectedElementsPreview from "../components/SelectedElementsPreview";
import AtomReactor from "../components/AtomReactor";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

interface State {
  selectedElement: string;
  addedElements: Array<any>;
  isReacting: boolean;
}

const initialState = {
  selectedElement: "",
  addedElements: [],
  isReacting: false
};

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case "START_NEW_REACTION":
      return {
        ...state,
        selectedElement: "",
        addedElements: [],
        isReacting: false
      };
    case "SET_SELECTED_ELEMENT":
      return {
        ...state,
        ...action.payload
      };
    case "ADD_ELEMENT":
      return {
        ...state,
        addedElements: [...state.addedElements, action.payload.element]
      };
    case "UPDATE_ADDED_ELEMENTS":
      return {
        ...state,
        ...action.payload
      };
    case "SET_IS_REACTING":
      return {
        ...state,
        ...action.payload
      };
    default:
      throw new Error();
  }
};

const TodosDispatch = React.createContext(null);

const ElementGroupExample = () => {
  /* 
    this.state = {
      elementsByColumn: {},
      selectedElement: "",
      addedElements: [],
      isReacting: false
    }
  */
  const [elementsByColumn, setElements] = useState({});

  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedElement, addedElements, isReacting } = state;
  const addElement = (element: Object) => {
    // @ts-ignore
    dispatch({ type: "ADD_ELEMENT", payload: { element } });
  };

  const startNewReaction = () => {
    dispatch({ type: "START_NEW_REACTION", payload: {} });
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
      type: "UPDATE_ADDED_ELEMENTS",
      payload: { addedElements: updatedAddedElements, selectedElement: "" }
    });
  };

  const setSelectedElement = (selectedElement: string) => {
    dispatch({ type: "SET_SELECTED_ELEMENT", payload: { selectedElement } });
  };

  const setIsReacting = (isReacting: boolean) => {
    dispatch({ type: "SET_IS_REACTING", payload: { isReacting } });
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
      <ElementGroup
        // @ts-ignore
        elements={elementsByColumn[1] || []}
        selectedElement={state.selectedElement}
        setElement={setSelectedElement}
        addElement={addElement}
        hasSelectedMaxElements={hasSelectedMaxElements}
        id="akaliMetals"
      />
      <ElementGroup
        // @ts-ignore
        elements={elementsByColumn[2] || []}
        selectedElement={selectedElement}
        setElement={setSelectedElement}
        addElement={addElement}
        hasSelectedMaxElements={hasSelectedMaxElements}
        id="alkaliEarthMetals"
      />
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
      <ElementGroup
        // @ts-ignore
        elements={elementsByColumn[16] || []}
        selectedElement={selectedElement}
        setElement={setSelectedElement}
        addElement={addElement}
        hasSelectedMaxElements={hasSelectedMaxElements}
        id="Halogens"
      />
      <ElementGroup
        // @ts-ignore
        elements={elementsByColumn[17] || []}
        selectedElement={selectedElement}
        setElement={setSelectedElement}
        addElement={addElement}
        hasSelectedMaxElements={hasSelectedMaxElements}
        id="Halogens"
      />
      <ElementGroup
        // @ts-ignore
        elements={elementsByColumn[18] || []}
        selectedElement={selectedElement}
        setElement={setSelectedElement}
        addElement={addElement}
        hasSelectedMaxElements={hasSelectedMaxElements}
        id="NobleGases"
      />
    </div>
  );
};

export default ElementGroupExample;
