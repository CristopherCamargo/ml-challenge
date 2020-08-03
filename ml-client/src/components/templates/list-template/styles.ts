import styled from "styled-components";

export const ListTemplateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  margin-top: 20px;
  section {
    width: 1080px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
