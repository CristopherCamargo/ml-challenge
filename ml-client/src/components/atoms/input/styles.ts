import styled, { css } from "styled-components";

export const InputWrapper = styled.input`
  ${({ theme: { input } }) =>
    css`
      height: ${input.height};
      border-radius: ${input.borderRadius};
      width: 100%;
      outline: none;
      border: none;
      padding-left: ${input.padding};
      padding-right: ${input.padding};
    `}
`;
