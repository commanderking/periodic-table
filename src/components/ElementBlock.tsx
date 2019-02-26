import React, { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

interface Element {
  name: string;
  symbol: string;
}

const ElementBlock = ({
  element,
  clickHandler,
  isSelected
}: {
  element: Element;
  clickHandler: any;
  isSelected: boolean;
}) => {
  const isSelectedBackgroundColor = isSelected ? "red" : "white";
  return (
    <div
      onClick={() => {
        clickHandler(element.symbol);
      }}
      css={css`
        border: 1px solid black;
        cursor: pointer;
        background-color: ${isSelectedBackgroundColor};
      `}
    >
      <p>{element.name}</p>
      <p>{element.symbol}</p>
    </div>
  );
};

export default ElementBlock;
