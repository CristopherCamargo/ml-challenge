import styled from "styled-components";

export const ProductDetailTemplateWrapper = styled.section`
  width: 1048px;
  margin: 20px auto;
  background-color: white;
  padding: 16px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0px;
  }
`;

export const Top = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Aside = styled.aside`
  display: flex;
  width: 30%;
  justify-content: flex-end;
  margin-right: 16px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
    display: block;
    > div {
      padding: 8px;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
`;

export const Bottom = styled.div`
  margin-left: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;
