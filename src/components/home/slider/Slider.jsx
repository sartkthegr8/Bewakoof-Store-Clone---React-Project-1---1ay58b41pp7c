import React, { useEffect, useState } from "react";
import "./Slider.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Image } from "react-bootstrap";

const Slider = () => {
  const images = [
    "https://images.bewakoof.com/uploads/grid/app/HC---1X1-pajamas---common-1711780964.png",
    "https://images.bewakoof.com/uploads/grid/app/b-day-bash-hc-1x1-1711780966.jpg",
    "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-Joggers-1699357840.jpg",
    "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-OversizedSweatshirts-common-1699594711.jpg",
    "https://images.bewakoof.com/uploads/grid/app/Women-Short-Tops-1x1-Banner-1699634146.jpg",
    "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-KnitPerfection-sweater-common-1699625976.jpg",
  ];

 

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  const techResponsive = {
    0: { items: 1 },
    300: { items: 2 },
    600: { items: 3 },
  };

  const items = [
    {
      key: 1,
      imageSrc:
         "https://images.bewakoof.com/uploads/grid/app/b-day-bash-hc-1x1-1711780966.jpg",
    },
    {
      key: 2,
      imageSrc:
        "https://images.bewakoof.com/uploads/grid/app/NEW-1x1-Joggers-1699357840.jpg",
    },
    {
      key: 3,
      imageSrc:
        "https://images.bewakoof.com/uploads/grid/app/1x1-Epic-Fandom-Bundle--3--1712056865.jpg",
    },
    {
      key: 4,
      imageSrc:
        "https://images.bewakoof.com/uploads/grid/app/HC---1X1-pajamas---common-1711780964.png",
    },
    {
      key: 5,
      imageSrc:
        "https://images.bewakoof.com/uploads/grid/app/Step-Up-Style-JOGGERS-at-1499-1x1-Common-Banner--1--1711966203.jpg",
    },
  ];
  function Tile({ onClick }) {
    return (
      <div onClick={onClick} tabIndex={0} role="button" />
    );
  }
  return (
    <div className="slider-container">
      <AliceCarousel
        mouseTracking
        items={items.map((item) => (
          <div key={item.key} >
            <Image
              src={item.imageSrc}
              onDragStart={handleDragStart}
              role="presentation"
              className="slider-images"
              onClick={()=>alert('hello alice')}
            />
          </div>
        ))}
        responsive={techResponsive}
        controlsStrategy="alternate"
        autoPlay={true}
        autoPlayInterval={2000}
        infinite={true}
        animationDuration={1500}
        disableDotsControls={true}
        disableButtonsControls={true}
      />
    </div>
  );
};

export default Slider;
