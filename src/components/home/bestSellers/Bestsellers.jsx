import React, { useEffect, useState } from "react";

import axios from "axios";

import "./Bestsellers.css";
import { Container, Image } from "react-bootstrap";
import Card from "../../card/Card";
import ProductCard from "../../productcard/ProductCard";
import SlideCarousel from "../../slidecarousel/SlideCarousel";

const Bestsellers = () => {
  const [bestsellersProducts, setBestsellersProducts] = useState([]);

  useEffect(() => {
    fetchingBestsellers();
  }, []);

  const fetchingBestsellers = async () => {
    try {
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?sort={%22rating%22%3A1}",
        {
          headers: {
            projectId: "f104bi07c490",
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setBestsellersProducts(response.data.data);
      }
    } catch (error) {
      console.log(e);
    }
  };
  return (
    <div>
      <h3 className="bestsellers-title">BESTSELLERS</h3>
      {/* <ul className="bestsellers-container">
        {bestsellersProducts.map((product) => (
         <li className="bestsellers-single-product-container">
        
           <Image
             src={product.displayImage}
             alt={product.name}
             className="bestsellers-image"
             fluid
           />
         
       </li>
        ))}
      </ul> */}
      <Container className="bestsellers-container" fluid>
        {/* <ProductCard products={bestsellersProducts}/> */}
        <SlideCarousel
          items={bestsellersProducts.map((product) => {
            return <Card product={product} />;
          })}
        />
        {/* {
        bestsellersProducts.map((product)=>{
          return(
            <Card product={product}/>
          )
        })
      } */}
      </Container>
    </div>
  );
};

export default Bestsellers;
