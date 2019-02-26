import React, { useEffect, useState } from "react";
import ElementGroup from "../components/ElementGroup";
import { fetchPeriodicTableDataGroupedByColumn } from "../requests/periodicTable";
import SelectedElementsPreview from "../components/SelectedElementsPreview";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const ElementGroupExample = () => {
  const [elementsByColumn, setElements] = useState({});
  const [selectedElement, setSelectedElement] = useState("");
  const [addedElements, setAddedElements] = useState([]);

  const fetchDataAndUpdateElementsState = async () => {
    const periodicTableDataByColumn = await fetchPeriodicTableDataGroupedByColumn();
    await setElements(periodicTableDataByColumn);
  };

  useEffect(() => {
    fetchDataAndUpdateElementsState();
  }, []);

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
        id="akaliMetals"
      />
      <ElementGroup
        // @ts-ignore
        elements={elementsByColumn[2] || []}
        selectedElement={selectedElement}
        setElement={setSelectedElement}
        id="alkaliEarthMetals"
      />
      <SelectedElementsPreview />
      <ElementGroup
        // @ts-ignore
        elements={elementsByColumn[17] || []}
        selectedElement={selectedElement}
        setElement={setSelectedElement}
        id="Halogens"
      />
      <ElementGroup
        // @ts-ignore
        elements={elementsByColumn[18] || []}
        selectedElement={selectedElement}
        setElement={setSelectedElement}
        id="NobleGases"
      />
    </div>
  );
};

export default ElementGroupExample;
