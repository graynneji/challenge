import React, { useContext, Suspense } from "react";
import { ProductsContext } from "../context/productsContext";
import styled from "styled-components";
const Nav = React.lazy(() => import("../ui/Nav"));
const Table = React.lazy(() => import("../ui/Table"));
import Loader from "../ui/Loader";

const Container = styled.div`
  min-width: 144rem;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: #f6f6f6;
`;

function Home() {
  const { products, isLoading, error } = useContext(ProductsContext);
  console.log(products);
  return (
    <Suspense fallback={<Loader />}>
      <Container>
        <Nav />
        <Table products={products} isLoading={isLoading} error={error} />
      </Container>
    </Suspense>
  );
}

export default Home;
