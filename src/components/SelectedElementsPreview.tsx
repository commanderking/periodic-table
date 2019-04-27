import React from "react";
import { setIsReacting } from "../ionicReactionBasic/IonicReactionBasicActions";
import SelectedElementPreview from "./SelectedElementPreview";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const SelectedElementsPreview = ({
  addedElements,
  hasSelectedMaxElements,
  dispatch
}: any) => {
  return (
    <div id="ElementsPreview">
      {addedElements.length === 0 ? (
        <h1>No Elements Selected</h1>
      ) : (
        <h1>Selected Elements</h1>
      )}
      {addedElements.map((element: any, index: number) => (
        <SelectedElementPreview
          key={`${element}-${index}`}
          element={element}
          dispatch={dispatch}
        />
      ))}
      {hasSelectedMaxElements && (
        <button
          css={css`
             {
              display: block;
              margin: auto;
            }
          `}
          onClick={() => {
            dispatch(setIsReacting(true));
          }}
        >
          Mix Atoms
        </button>
      )}
    </div>
  );
};

export default SelectedElementsPreview;
