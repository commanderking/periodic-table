import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const SelectedElementsPreview = ({ addedElements }: any) => {
  return (
    <div id="ElementsPreview">
      {addedElements.length === 0 ? (
        <h1>No Elements Selected</h1>
      ) : (
        <h1>Selected Elements</h1>
      )}
      {addedElements.map((element: any) => {
        return (
          <div>
            <p>{element.name}</p>
            <p>{element.symbol}</p>
            <span>X</span>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedElementsPreview;
