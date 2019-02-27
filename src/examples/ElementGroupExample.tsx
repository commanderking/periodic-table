import React, { useEffect, useState } from "react";
import ElementGroup from "../components/ElementGroup";
import { fetchPeriodicTableDataGroupedByColumn } from "../requests/periodicTable";
import SelectedElementsPreview from "../components/SelectedElementsPreview";
import ElementPreviewBlock from "../components/ElementPreviewBlock";
import ElementBlock from "../components/ElementBlock";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const ElementGroupExample = () => {
  const [elementsByColumn, setElements] = useState({});
  const [selectedElement, setSelectedElement] = useState("");
  const [addedElements, addSelectedElement] = useState([]);

  const addElement = (element: Object) => {
    // @ts-ignore
    addSelectedElement([...addedElements, element]);
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
        grid-template-columns: 1fr 1fr 6fr 1fr 1fr;
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
        <SelectedElementsPreview addedElements={addedElements} />
      </div>{" "}
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
