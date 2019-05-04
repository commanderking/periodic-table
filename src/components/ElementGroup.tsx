import React, { useCallback } from "react";
import ElementBlock from "./ElementBlock";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { setSelectedElement } from "../ionicReactionBasic/IonicReactionBasicActions";
import { Element } from "../types/element";
import { useReactionState } from "../stateManagement/ReactionContext";

const ElementGroup = ({
  elements,
  selectedElement,
  hasSelectedMaxElements,
  id
}: {
  id: string;
  elements: Array<Element>;
  selectedElement: string;
  hasSelectedMaxElements: boolean;
}) => {
  const { dispatch } = useReactionState();

  const clickHandler = useCallback((element: string) => {
    if (!hasSelectedMaxElements) {
      dispatch(setSelectedElement(element));
    }
  }, []);
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
            clickHandler={clickHandler}
            dispatch={dispatch}
            isSelected={isSelected && !hasSelectedMaxElements}
          />
        );
      })}
    </div>
  );
};

export default ElementGroup;
