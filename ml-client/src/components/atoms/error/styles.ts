import styled, { css } from "styled-components";

export const ErrorWrapper = styled.div`
  ${({
    theme: {
      error: { color, borderColor, backgroundColor }
    }
  }) =>
    css`
      width: 280px;
      padding: 20px;
      margin: auto;
      color: ${color};
      margin-top: 20px;
      background-color: ${backgroundColor};
      border-color: ${borderColor};
    `}
`;
