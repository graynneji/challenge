import { useContext } from "react";
import { ProductsContext } from "../context/productsContext";
import styled from "styled-components";
import Table from "../ui/Table";
import Nav from "../ui/Nav";

const Container = styled.div`
  min-width: 144rem;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: #f6f6f6;
  /* margin-bottom: 2.6rem; */
`;

function Home() {
  const { products, isLoading, error } = useContext(ProductsContext);
  console.log(products);
  return (
    <Container>
      <Nav />
      <Table products={products} isLoading={isLoading} error={error} />
    </Container>
  );
}

export default Home;
