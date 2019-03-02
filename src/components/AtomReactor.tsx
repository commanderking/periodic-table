import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const AtomReactor = () => (
  <div>
    <h1>Reacting</h1>
    <div
      css={css`
        border-radius: 50%;
        width: 50px;
        background-color: red;
      `}
    >
      element
    </div>
  </div>
);

export default AtomReactor;
