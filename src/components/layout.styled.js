import styled from "styled-components";

export const Container = styled.main`
  fontfamily: ${({ theme }) => theme.fontFamily};
  min-height: 98vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 30%;
  margin-right: 30%;
  @media (max-width: 1440px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`;

export const Body = styled.div`
  opacity:${({ theme }) => theme.backgroundOpacity};
  flex: 1;
`;
