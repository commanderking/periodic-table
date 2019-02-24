import React, { useEffect, useState } from "react";
import ElementGroup from "../components/ElementGroup";

const testElements = [
  { name: "Hydrogen", symbol: "H" },
  { name: "Helium", symbol: "He" },
  { name: "Lithium", symbol: "Li" }
];

const ElementGroupExample = () => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      // @ts-ignore - it does not like I've initialized the array with nothing and am updating it with real elements
      setElements(testElements);
    }, 3000);
  });
  return (
    <div className="ElementGroupExample">
      <ElementGroup elements={elements} id="akaliMetals" />
    </div>
  );
};

export default ElementGroupExample;
