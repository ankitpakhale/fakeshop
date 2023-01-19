import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";

import { setProducts } from "../redux/actions/productActions"; // setProducts is Action to perform the operation

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    // Getting data from API
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.info("error", err);
      });
    // Setting or Dispatching received data in store using setProducts Action
    // Action is setProducts & method is dispatch
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.info(products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
