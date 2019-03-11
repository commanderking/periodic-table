import React, { useEffect, useState } from "react";
import ElementGroup from "../components/ElementGroup";
import { fetchPeriodicTableDataGroupedByColumn } from "../requests/periodicTable";
import SelectedElementsPreview from "../components/SelectedElementsPreview";
import AtomReactor from "../components/AtomReactor";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

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
  const [selectedElement, setSelectedElement] = useState("");
  const [addedElements, updateAddedElements] = useState([]);
  const [isReacting, setIsReacting] = useState(false);

  const addElement = (element: Object) => {
    // @ts-ignore
    updateAddedElements([...addedElements, element]);
  };

  const removeElement = (element: any) => {
    const indexToDelete = addedElements.findIndex((addedElement: any) => {
      return element.name === addedElement.name;
    });

    const updatedAddedElements = addedElements.filter((element, index) => {
      return index !== indexToDelete;
    });
    updateAddedElements(updatedAddedElements);
    setSelectedElement("");
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
        selectedElement={selectedElement}
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
          <AtomReactor addedElements={addedElements} />
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
