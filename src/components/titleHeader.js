import * as React from "react";

import Clock from "./clock";
import { TitleHeaderStyle, TitleStyle } from "./titleHeader.styled";

const TitleHeader = ({ titleName, themeCallback }) => {
  return (
    <TitleHeaderStyle>
      <TitleStyle>{titleName}</TitleStyle>
      <Clock parentCallback={themeCallback} />
    </TitleHeaderStyle>
  );
};

export default TitleHeader;
