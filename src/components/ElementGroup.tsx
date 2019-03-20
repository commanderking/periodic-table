import React, { useContext } from "react";
import ElementBlock from "./ElementBlock";
import { ReactionDispatch } from "../ionicReactionBasic/IonicReactionBasicContainer";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { setSelectedElement } from "../ionicReactionBasic/IonicReactionBasicActions";
interface Element {
  name: string;
  symbol: string;
}

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
  const dispatch = useContext(ReactionDispatch);

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
                // @ts-ignore
                dispatch(setSelectedElement(element));
              }
            }}
            isSelected={isSelected && !hasSelectedMaxElements}
          />
        );
      })}
    </div>
  );
};

export default ElementGroup;
