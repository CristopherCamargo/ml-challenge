import styled from "styled-components";

export const SearchTemplateWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  .button {
    width: 40px;
  }
`;

export const Left = styled.div`
  width: 100%;
  .input {
    border-radius: ${({
      theme: {
        input: { borderRadius }
      }
    }) => `${borderRadius} 0px 0px ${borderRadius}`};
  }
`;

export const Right = styled.div`
  margin-left: 4px;
  .button {
    border-radius: ${({
      theme: {
        button: { borderRadius }
      }
    }) => `0px ${borderRadius} ${borderRadius} 0px`};
  }
`;
