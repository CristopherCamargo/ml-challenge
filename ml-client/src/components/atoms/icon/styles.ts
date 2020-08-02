import styled from "styled-components";

interface Props {
  size: Size;
}

export const IconWrapper = styled.img<Props>`
  width: ${({ size, theme }) => theme.icon.size[size]};
  height: ${({ size, theme }) => theme.icon.size[size]};
`;
