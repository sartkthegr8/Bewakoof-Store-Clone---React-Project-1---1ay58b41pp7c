import React from "react";
import BottomNavbar from "./bottomNavbar/BottomNavbar";
import Slider from "./slider/Slider";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";
import "./Home.css";
import { Image } from "react-bootstrap";
import Bestsellers from "./bestSellers/Bestsellers";
import { useNavigate } from "react-router-dom";
import TrendingCategoriesMen from "./trendingCategories/TrendingCategoriesMen";
import TrendingCategoriesWomen from "./trendingCategories/TrendingCategoriesWomen";
const Home = ({ isSearching, setIsSearching }) => {
  // const { products, setProducts } = productsContext();
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <>
        <BottomNavbar />
        <Slider />
        <FeaturedProducts />
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/Blockbuster-deal-thin-strip-Desktop-Joggers-under-999-1702050074.jpg"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/Men/jogger")}
        />

        <div className="designs-of-the-week-container">
          <h6>Designs of the week</h6>
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Slice-1-1701769393.jpg"
            onClick={() => navigate("/men")}
          />
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Slice-2-1701769392.jpg"
            onClick={() => navigate("/women")}
          />
        </div>

        <TrendingCategoriesMen />
        <TrendingCategoriesWomen/>
        <Bestsellers />
        {/* <div className="tribe-vote-banners">
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg"
            fluid
          />
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg"
            fluid
          />
        </div> */}
      </>
    </div>
  );
};

export default Home;
