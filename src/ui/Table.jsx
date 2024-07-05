/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import styled, { css } from "styled-components";

const StyledTable = styled.ul`
  display: grid;
  grid-template-columns: repeat(11, auto);
  /* width: 134.8rem; */
  min-width: 127rem;
  margin-bottom: 23rem;
  margin: 0 auto;
`;

const Head = styled.li`
  background-color: #f0f4fe;

  /* height: 43px; */
  /* background-color: green; */
  height: 43px;
  color: #595959;
  line-height: 1.6rem;
  font-weight: 600;
  padding: 1rem 0rem;
  margin-bottom: 1.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  &:nth-child(11) {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
const Body = styled.li`
  background-color: white;
  /* font-family: "Euclid Circular B"; */
  /* height: 40px; */
  /* background-color: red; */
  color: #262626;
  /* border-bottom: 1px solid #444; */
  /* padding: 1.2rem 1.5rem 1.1rem 0.6rem; */
  /* padding-bottom: 1rem;
  padding-top: 1rem; */
  padding-top: 2rem;
  padding-bottom: 1rem;
  /* column-gap: 2rem; */
  display: flex;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #f0f0f0;
    /* padding-bottom: 1rem; */
  }

  &:nth-child(11n + 1):after {
    left: 2rem;
  }

  &:nth-child(11n + 11):after {
    right: 1rem;
  }
  &:nth-last-child(-n + 11):after {
    display: none;
  }
  &:nth-child(12) {
    border-top-left-radius: 14px;
  }
  &:nth-child(22) {
    border-top-right-radius: 14px;
  }
  &:last-child {
    border-bottom-right-radius: 14px;
  }

  ${({ productsLength }) => css`
    &:nth-child(${productsLength * 11 + 1}) {
      border-bottom-left-radius: 14px;
    }
  `}
`;
const CheckButton = styled.input`
  width: 14.06px;
  height: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  margin-left: 0.85rem;
`;
const ProdImage = styled.img`
  width: 4rem;

  height: 4rem;
  border-radius: 0.4rem;
`;

function Table({ isLoading, products, error }) {
  if (!products) return null;
  const productsLength = products?.length;
  console.log(productsLength);
  return (
    // <div>
    <StyledTable>
      <Head>
        <CheckButton type="checkbox" />
      </Head>
      <Head>S/N</Head>
      <Head>Image</Head>
      <Head>SKU</Head>
      <Head>Name</Head>
      <Head>Title</Head>
      <Head>Description</Head>
      <Head>Brand</Head>
      <Head>Cost Price</Head>
      <Head>Quantity</Head>
      <Head>Size</Head>
      {products?.map((prod, idx) => (
        <Fragment key={idx}>
          <Body productsLength={productsLength}>
            <CheckButton
              style={{
                marginLeft: "1.5rem",
              }}
              type="checkbox"
            />
          </Body>
          <Body>{idx + 1}.</Body>
          <Body>
            <ProdImage src={prod["Image Small"]} alt="product image" />
          </Body>
          <Body>{prod.SKU}</Body>
          <Body>{prod.Designer}</Body>
          <Body>{prod.Title}</Body>
          <Body>{prod.Description}</Body>
          <Body>{prod.Brand}</Body>
          <Body>{prod["Cost Price"]}</Body>
          <Body>{prod.Quantity}</Body>
          <Body>{prod.size}</Body>
        </Fragment>
      ))}
    </StyledTable>
    // </div>
  );
}

export default Table;
