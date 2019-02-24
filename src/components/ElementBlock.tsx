import React, { useState } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

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
  return (
    <div
      onClick={() => {
        clickHandler(element.symbol);
      }}
      css={isSelected ? { backgroundColor: "red" } : {}}
    >
      <p>{element.name}</p>
      <p>{element.symbol}</p>
    </div>
  );
};

export default ElementBlock;
