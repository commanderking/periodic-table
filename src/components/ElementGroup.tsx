import React, { useState } from "react";
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
  id
}: {
  id: string;
  elements: Array<Element>;
  selectedElement: string;
  setElement: any;
}) => {
  return (
    <div
      id={id}
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      `}
    >
      {elements.map(element => {
        const isSelected = element.symbol === selectedElement;
        return (
          <ElementBlock
            key={element.symbol}
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
