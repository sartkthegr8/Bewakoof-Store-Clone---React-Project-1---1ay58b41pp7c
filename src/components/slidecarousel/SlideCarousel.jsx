import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./carousel.css";

const SlideCarousel = ({ items }) => {
  const techResponsive = {
    0: { items: 1 },
    576: { items: 2 },
    768: { items: 3 },
    992: { items: 4 },
    1200: { items: 5 },
  };

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={techResponsive}
      disableDotsControls
      controlsStrategy="alternate"
      renderNextButton={({ isDisabled }) => {
        return (
          <button className="btn-nav" disabled={isDisabled}>
            &rang;
          </button>
        );
      }}
      renderPrevButton={({ isDisabled }) => {
        return (
          <button className="btn-nav" disabled={isDisabled}>
            &lang;
          </button>
        );
      }}
    />
  );
};

export default SlideCarousel;
