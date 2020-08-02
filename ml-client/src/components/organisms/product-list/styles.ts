import styled, { css } from "styled-components";

export const ProductListWrapper = styled.section`
  ${({
    theme: {
      colors: { gray }
    }
  }) =>
    css`
      article {
        border-bottom: 1px solid ${gray};
      }
      background-color: white;
    `}
`;
