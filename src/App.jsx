import { ProductsProvider } from "./context/productsContext";
import Home from "./pages/Home";
// import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <ProductsProvider>
      <GlobalStyles />
      <Home />
    </ProductsProvider>
  );
}

export default App;
