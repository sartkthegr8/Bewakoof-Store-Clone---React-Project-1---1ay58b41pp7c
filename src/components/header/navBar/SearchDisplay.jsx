import React from "react";
import ProductCard from "../../productcard/ProductCard";
import { productsContext } from "../../contextApi/ProductsContext";

const SearchDisplay = ({searchTerm}) => {
  const { products,setProducts } = productsContext();
 
  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
};

export default SearchDisplay;
