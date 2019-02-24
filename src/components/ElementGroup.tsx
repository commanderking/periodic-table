import React, { useState } from "react";
import ElementBlock from "./ElementBlock";

interface Element {
  name: string;
  symbol: string;
}

const ElementGroup = ({
  elements,
  id
}: {
  id: string;
  elements: Array<Element>;
}) => {
  const [selectedElement, setElement] = useState("H");
  return (
    <div id={id}>
      {elements.map(element => {
        const isSelected = element.symbol === selectedElement;
        return (
          <ElementBlock
            element={element}
            clickHandler={(element: string) => {
              setElement(element);
            }}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
};

export default ElementGroup;
