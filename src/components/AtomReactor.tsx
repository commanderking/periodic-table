import React, { useRef, useLayoutEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

type Props = {
  addedElements: any;
};

const AtomReactor = ({ addedElements }: Props) => {
  const canvas = useRef(null);

  useLayoutEffect(() => {
    // @ts-ignore
    const context = canvas.current.getContext("2d");

    const atomSize = 15;
    context.save();
    context.scale(1, 1);
    context.fillStyle = "#FFFFFF";

    var pos = 0;
    const drawElementOne = () => {
      const xPos = 25;
      const yPos = 50;
      // @ts-ignore
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.strokeStyle = "black";
      context.beginPath();
      context.arc(25 + pos, 50, atomSize, 0, Math.PI * 2);
      context.stroke();
      context.restore();

      context.font = "11px Arial";
      context.fillText("H", xPos - 3 + pos, yPos + 3);
      pos += 1;
    };

    drawElementOne();
    window.setInterval(drawElementOne, 30);
  });
  return (
    <div>
      <h1>Reacting...</h1>
      <canvas
        ref={canvas}
        css={css`
          border: 1px solid black;
          width: 500px;
        `}
      />
    </div>
  );
};
export default AtomReactor;
