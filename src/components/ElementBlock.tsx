import React, { useContext } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { addElement } from "../ionicReactionBasic/IonicReactionBasicActions";
import { ReactionDispatch } from "../ionicReactionBasic/IonicReactionBasicContainer";

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
  const dispatch = useContext(ReactionDispatch);

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
      {isSelected && (
        <button
          onClick={() => {
            console.log("dispatch", dispatch);
            console.log();
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

export default ElementBlock;
