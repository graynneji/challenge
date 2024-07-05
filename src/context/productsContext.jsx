/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useReducer, useEffect } from "react";

const BASE_URL =
  "http://3.88.1.181:8000/products/public/catalog?supplier=FragranceNet&first=0&last=10";
export const ProductsContext = createContext();

const initialState = {
  products: [],
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "products/loaded":
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

export function ProductsProvider({ children }) {
  const [{ products, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function getProducts() {
      dispatch({ type: "loading" });
      try {
        const response = await axios.get(BASE_URL);
        dispatch({ type: "products/loaded", payload: response.data });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: "There is error loading products...",
        });
      }
    }
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, isLoading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}
