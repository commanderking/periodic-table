import React, { useEffect, useState } from "react";
import ElementGroup from "../components/ElementGroup";
import { fetchPeriodicTableDataGroupedByColumn } from "../requests/periodicTable";
import SelectedElementsPreview from "../components/SelectedElementsPreview";
const testElements = [
  { name: "Hydrogen", symbol: "H", column: 1 },
  { name: "Helium", symbol: "He", column: 8 },
  { name: "Lithium", symbol: "Li", column: 2 }
];

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
    <div id="ElementGroupExample">
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
