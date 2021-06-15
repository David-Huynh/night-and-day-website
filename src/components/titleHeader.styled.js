import styled from "styled-components";

export const TitleHeaderStyle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: nowrap;
`;
export const TitleStyle = styled.h1`
  color: ${({ theme }) => theme.foreground};
  opacity: ${({ theme }) => theme.highEmphText};
`;
