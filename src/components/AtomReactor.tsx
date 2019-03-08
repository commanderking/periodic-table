import React, { useRef, useEffect, useLayoutEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

type Props = {
  addedElements: any;
};

type ElementToDraw = {
  initXPos: number;
  yPos: number;
  radius: number;
  symbol: string;
  moveDirection: string; // update to enum
};

const AtomReactor = ({ addedElements }: Props) => {
  const canvasWidth = 500;
  const canvasHeight = 300;

  const canvas = useRef(null);
  const atomSize = 15;

  const firstElement = {
    initXPos: 25,
    yPos: 50,
    radius: atomSize,
    symbol: addedElements[0].symbol,
    moveDirection: "RIGHT"
  };

  const secondElement = {
    initXPos: canvasWidth - 25,
    yPos: 50,
    radius: atomSize,
    symbol: "Cl",
    moveDirection: "LEFT"
  };

  useEffect(() => {
    // @ts-ignore
    const context = canvas.current.getContext("2d");

    context.save();
    context.scale(1, 1);
    context.fillStyle = "#FFFFFF";

    var distanceElementMoved = 1;
    const drawElement = ({
      initXPos,
      yPos,
      radius,
      symbol,
      moveDirection
    }: ElementToDraw) => {
      const currentXPos =
        moveDirection === "RIGHT"
          ? initXPos + distanceElementMoved
          : initXPos - distanceElementMoved;
      // @ts-ignore
      context.strokeStyle = "black";
      context.beginPath();
      context.arc(currentXPos, yPos, radius, 0, Math.PI * 2);
      context.stroke();
      context.restore();

      context.font = "11px Arial";
      context.fillText(symbol, currentXPos - 3, yPos + 3);
    };
    console.log("distanceElementMoved", distanceElementMoved);
    window.setInterval(() => {
      if (distanceElementMoved < canvasWidth / 2 - 50) {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        drawElement(firstElement);
        drawElement(secondElement);
        distanceElementMoved += 0.5;
      }
    }, 1);
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
