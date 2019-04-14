import React from "react";
import AdobeFonts from "../components/adobeFonts";

import { css } from "@emotion/core";

const layout = css`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, minmax(1.2rem, 6.4rem));
  grid-column-gap: 2.4rem;
  justify-content: center;
  align-content: flex-start;
  padding-bottom: 12rem;
  @media (max-width: 768px) {
    padding: 0 1.2rem;
  }
  @media (max-width: 414px) {
    //TODO: なぜかmax-widthがremだと意図しない動きをする、要検証
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 0;
  }
`;

export default ({ children, className }) => (
  <div css={layout} className={className}>
    <AdobeFonts />
    {children}
  </div>
);
