import React, { useEffect, useState } from "react";
import { useBaseApi } from "../../../contextApi/BaseDomainContext";
import axios from "axios";
import ProductCard from "../../../productcard/ProductCard";
import { RingLoader } from "react-spinners";

const Women = () => {
  const [womensProducts, setWomensProducts] = useState([]);
  useEffect(() => {
    fetchingWomensProducts();
  }, []);
  const baseURL = useBaseApi();
  const fetchingWomensProducts = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/v1/ecommerce/clothes/products?filter={"gender":"Women"}&limit=1000`,
        {
          headers: {
            projectId: "f104bi07c490",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setWomensProducts(response.data.data);
      }
    } catch (error) {}
  };
  if (womensProducts.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RingLoader
          color={"#FEC001"}
          aria-label="Loading Spinner"
          data-testid="loader"
          size={100}
        />
      </div>
    );
  }
  return (
    <div>
      <ProductCard products={womensProducts} />
    </div>
  );
};

export default Women;
