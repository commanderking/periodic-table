import React, { useRef, useEffect } from "react";
import { removeElement } from "../ionicReactionBasic/IonicReactionBasicActions";
import { ElementWithReactionBehavior } from "../types/element";
import _ from "lodash";
import { drawAtom } from "../utils/canvasAtomUtils";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type Props = {
  element: ElementWithReactionBehavior;
  dispatch: any;
};

const elementPreviewStyle = css`
   {
    display: inline-block;
    padding: 10px;
    margin: 5px;
    border: 1px solid black;
  }
`;

const SelectedElementPreview = ({ element, dispatch }: Props) => {
  const atom = {
    initXPos: 50,
    yPos: 50,
    radius: 25,
    symbol: element.symbol,
    valenceElectrons: _.last(element.shells)
  };
  const elementCanvas = useRef(null);

  useEffect(() => {
    // @ts-ignore
    const context = elementCanvas.current.getContext("2d");
    drawAtom(context, atom, 0);
  }, [element]);

  return (
    <div css={elementPreviewStyle}>
      <span>{element.name}</span>
      <button
        onClick={() => {
          dispatch(removeElement(element));
        }}
      >
        X
      </button>
      <div>
        <canvas width={100} height={100} ref={elementCanvas} />
      </div>
    </div>
  );
};

export default SelectedElementPreview;
