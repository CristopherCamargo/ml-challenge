import styled from "styled-components";

interface Props {
  primary: boolean;
  secondary: boolean;
  color: Color;
  size: Size;
}

export const ButtonWrapper = styled.button<Props>`
  height: ${({ size, theme }) => theme.button.size[size]};
  width: 100%;
  border: none;
  border-radius: ${({
    theme: {
      button: { borderRadius }
    }
  }) => borderRadius};

  :hover {
    opacity: 0.8;
  }
`;
