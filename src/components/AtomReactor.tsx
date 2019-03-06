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

    context.save();
    context.scale(1, 1);
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, 50, 50);

    var pos = 0;
    const drawElementOne = () => {
      // @ts-ignore
      context.clearRect(0, 0, canvas.width, canvas.height);
      debugger;
      context.strokeStyle = "black";
      context.beginPath();
      context.arc(25 + pos, 25, 50 / 4, 0, Math.PI * 2);
      context.stroke();
      context.restore();

      context.font = "11px Arial";
      context.fillText("Hey", 20 + pos, 30);
      pos += 1;
    };

    drawElementOne();
    window.setInterval(drawElementOne, 100);
  });
  return (
    <div>
      <h1>Reacting...</h1>
      <canvas ref={canvas} />
    </div>
  );
};
export default AtomReactor;
