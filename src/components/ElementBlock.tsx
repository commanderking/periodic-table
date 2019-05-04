import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { addElement } from "../ionicReactionBasic/IonicReactionBasicActions";
import { Element } from "../types/element";

const ElementContent = React.memo(({ element }: any) => {
  return (
    <React.Fragment>
      <p
        css={css`
          margin: 0;
        `}
      >
        {element.name}
      </p>
      <p
        css={css`
          margin: 0;
        `}
      >
        {element.symbol}
      </p>
    </React.Fragment>
  );
});

const ElementBlock = ({
  element,
  clickHandler,
  isSelected,
  dispatch
}: {
  element: Element;
  clickHandler: any;
  isSelected: boolean;
  dispatch: any;
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
        padding: 10px;
        height: 70px;
      `}
    >
      <ElementContent element={element} />
      {isSelected && (
        <button
          onClick={() => {
            // @ts-ignore
            dispatch(addElement(element));
          }}
        >
          Add
        </button>
      )}
    </div>
  );
};

export default React.memo(ElementBlock);
