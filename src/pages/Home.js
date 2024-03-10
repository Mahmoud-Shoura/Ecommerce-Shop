import React, { useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  // get product from product context
  const { products } = useContext(ProductContext);
  console.log(products);
  return <div>Homepage</div>;
};

export default Home;
