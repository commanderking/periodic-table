import React, { useRef, useEffect, useLayoutEffect } from "react";
import _ from "lodash";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { drawAtom } from "../utils/canvasAtomUtils";
type Props = {
  addedElements: any;
};

type ElementToDraw = {
  initXPos: number;
  yPos: number;
  radius: number;
  symbol: string;
  valenceElectrons: number;
  moveDirection: string; // update to enum
};

const AtomReactor = ({ addedElements }: Props) => {
  const canvasWidth = 500;
  const canvasHeight = 300;

  const canvas = useRef(null);
  const atomSize = 30;

  const firstElement = {
    initXPos: 25,
    yPos: 50,
    radius: atomSize,
    symbol: addedElements[0].symbol,
    valenceElectrons: _.last(addedElements[0].shells),
    moveDirection: "RIGHT"
  };

  const secondElement = {
    initXPos: canvasWidth - 25,
    yPos: 50,
    radius: atomSize,
    symbol: addedElements[1].symbol,
    valenceElectrons: _.last(addedElements[1].shells),
    moveDirection: "LEFT"
  };

  console.log(
    "_.last(addedElements[1].shells",
    _.last(addedElements[1].shells)
  );

  useEffect(() => {
    // @ts-ignore
    const context = canvas.current.getContext("2d");

    context.save();
    context.scale(1, 1);
    context.fillStyle = "#FFFFFF";

    var distanceElementMoved = 1;

    const drawReaction = () => {
      if (distanceElementMoved < canvasWidth / 2 - atomSize * 3) {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        drawAtom(context, firstElement, distanceElementMoved);
        drawAtom(context, secondElement, distanceElementMoved);
        distanceElementMoved += 0.5;
      }
    };

    window.setInterval(drawReaction, 1);
  });
  return (
    <div>
      <h1>Reacting...</h1>
      <canvas
        width={canvasWidth}
        height={canvasHeight}
        ref={canvas}
        css={css`
          border: 1px solid black;
        `}
      />
    </div>
  );
};
export default AtomReactor;
