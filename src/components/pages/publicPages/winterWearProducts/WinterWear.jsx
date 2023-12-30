import React, { useEffect, useState } from "react";
import { useBaseApi } from "../../../contextApi/BaseDomainContext";
import axios from "axios";
import ProductCard from "../../../productcard/ProductCard";
import { RingLoader } from "react-spinners";

const WinterWear = () => {
  const baseURL = useBaseApi();

  const [winterWearProducts, setWinterWearProducts] = useState([]);

  useEffect(() => {
    fetchingWinterWearProducts();
  }, []);

  const fetchingWinterWearProducts = async () => {
    try {
      const response = await axios.get(
        `${baseURL}/api/v1/ecommerce/clothes/products?filter={"subCategory":"hoodie"}&limit=1000`,
        {
          headers: {
            projectId: "f104bi07c490",
          },
        }
      );

      const responseSweater = await axios.get(
        `${baseURL}/api/v1/ecommerce/clothes/products?filter={"subCategory":"sweater"}&limit=1000`,
        {
          headers: {
            projectId: "f104bi07c490",
          },
        }
      );

      let winterCollection = [];

      if (response.status === 200) {
        winterCollection = [...winterCollection, ...response.data.data];
      }

      if (responseSweater.status === 200) {
        winterCollection = [...winterCollection, ...responseSweater.data.data];
      }

      setWinterWearProducts(winterCollection);
    } catch (error) {}
  };
  if (winterWearProducts.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       <RingLoader
      color={'#FEC001'}
      aria-label="Loading Spinner"
      data-testid="loader"
      size={100}
    />
  </div>
    );
  }
  return (
    <div>
      <ProductCard products={winterWearProducts} />
    </div>
  );
};

export default WinterWear;
