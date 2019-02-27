import React from "react";
import ElementBlock from "./ElementBlock";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

interface Element {
  name: string;
  symbol: string;
}

const ElementGroup = ({
  elements,
  selectedElement,
  setElement,
  addElement,
  hasSelectedMaxElements,
  id
}: {
  id: string;
  elements: Array<Element>;
  selectedElement: string;
  addElement: any;
  setElement: any;
  hasSelectedMaxElements: boolean;
}) => {
  return (
    <div
      id={id}
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        opacity: ${hasSelectedMaxElements ? 0.2 : 1};
      `}
    >
      {elements.map(element => {
        const isSelected = element.symbol === selectedElement;
        return (
          <ElementBlock
            key={element.symbol}
            element={element}
            clickHandler={(element: string) => {
              if (!hasSelectedMaxElements) {
                setElement(element);
              }
            }}
            addElement={(element: Object) => {
              addElement(element);
            }}
            isSelected={isSelected && !hasSelectedMaxElements}
          />
        );
      })}
    </div>
  );
};

export default ElementGroup;
