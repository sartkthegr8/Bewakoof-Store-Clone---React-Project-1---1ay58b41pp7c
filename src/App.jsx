import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import "./styles/App.css";
import Footer from "./components/footer/Footer";
import Routers from "./routes/Routers";
import { useCartItems } from "./components/contextApi/CartItemsContext";
import { fetchingCartItems } from "./helper/CartFetchingHelper";
import { useAccessToken } from "./components/contextApi/AccessTokenContext";
import { useCartItemsNumber } from "./components/contextApi/CartItemsNumberContext";

const App = () => {
  const [isSearching, setIsSearching] = useState(false);

  const { cartItems, setCartItems, totalPrice, setTotalPrice } = useCartItems();
  const { accessToken } = useAccessToken();
  const { cartItemsNumber, setCartItemsNumber } = useCartItemsNumber();

  useEffect(() => {
    if (accessToken) {
      fetchingCart();
    }
  }, [accessToken]);

  const fetchingCart = async () => {
    const cartData = await fetchingCartItems(accessToken).catch((error) =>
      console.log(error)
    );
    if (cartData) {
      setCartItems(cartData.cartItems);
      setTotalPrice(cartData.totalPrice);
      setCartItemsNumber(cartData.cartItems.length);
    }
  };
  return (
    <div id="app" className="app-wrapper">
      <Header isSearching={isSearching} setIsSearching={setIsSearching} />
      <Routers isSearching={isSearching} setIsSearching={setIsSearching} />
      <Footer />
    </div>
  );
};

export default App;
