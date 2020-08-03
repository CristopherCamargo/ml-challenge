import styled from "styled-components";

export const ProductItemWrapper = styled.article`
  padding: 16px 80px 10px 16px;
  strong {
    font-size: 24px;
  }
  p {
    font-size: 18px;
  }
  .city {
    font-size: 12px;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: start;
  img {
    margin-left: 5px;
    margin-top: 5px;
  }
  margin-bottom: 32px;
  text-overflow: ellipsis;
`;
