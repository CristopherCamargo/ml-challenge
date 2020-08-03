import styled, { css } from "styled-components";

interface Props {
  primary: boolean;
  secondary: boolean;
  color: Color;
  size: Size;
}

export const ButtonWrapper = styled.button<Props>`
  ${({ size, primary, theme }) =>
    css`
      height: ${theme.button.size[size]};
      width: 100%;
      border: none;
      outline: none;
      border-radius: ${theme.button.borderRadius};

      :hover {
        opacity: 0.8;
      }

      ${primary &&
      css`
        background-color: ${theme.colors.primary};
        color: white;
        @media (max-width: 768px) {
          height: ${theme.button.sizeMobile[size]};
          font-size: 22px;
        }
      `}
    `}
`;
