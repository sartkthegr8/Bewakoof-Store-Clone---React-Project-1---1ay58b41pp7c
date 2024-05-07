import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Checkout.css";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useAccessToken } from "../../../contextApi/AccessTokenContext";
import { ToasterMessage } from "../../../../helper/toastHelper";
import { useCartItems } from "../../../contextApi/CartItemsContext";
import { useBaseApi } from "../../../contextApi/BaseDomainContext";
import axios from "axios";
import { useCartItemsNumber } from "../../../contextApi/CartItemsNumberContext";
const Checkout = () => {
  const navigate = useNavigate();

  // const accessToken = localStorage.getItem("accessToken");

  const [validated, setValidated] = useState(false);
  const [orderSuccessfull, setOrderSuccessfull] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    mobileNo: "",
  });
  const [cardInfo, setCardInfo] = useState({
    card_number: "",
    exp_date: "",
    cvv:"",
  });
  const [userAddress, setUserAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    addressType: "HOME",
  });
  const isuserinfovalid = Object.values({...cardInfo,...userAddress}).every((val)=>val)

  const { accessToken } = useAccessToken();
  const { cartItems, setCartItems } = useCartItems();
  const { cartItemsNumber, setCartItemsNumber } = useCartItemsNumber();
  const baseURL = useBaseApi();

  const [ispayment, setispayment] = useState(false);


  const handleSubmit = (event) => { console.log(event);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      // event.preventDefault();
      // event.stopPropagation();
    }

    setValidated(true);
    // setispayment(true);
    handleCheckout(event);
  };

  const handleUserInfoChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleCardInfoChange = (e) => {
    setCardInfo({
      ...cardInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddressChange = (e) => {
    setUserAddress({
      ...userAddress,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(userAddress);
  const buyItems = async (id) => {
    try {
      const response = await axios.post(
        `${baseURL}/api/v1/ecommerce/order`,
        {
          productId: id,
          quantity: 1,
          addressType: userAddress.addressType,
          address: {
            street: userAddress.street,
            city: userAddress.city,
            state: userAddress.state,
            country: userAddress.country,
            zipCode: userAddress.zipCode,
          },
        },
        {
          headers: {
            projectId: "f104bi07c490",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setOrderSuccessfull(true);
      }
    } catch (error) {
      setOrderSuccessfull(false);
      ToasterMessage("error", error.response.message);
    }
    setispayment(false);
  };
  const removeAllCartItems = async () => {
    try {
      const response = await axios.delete(
        "https://academics.newtonschool.co/api/v1/ecommerce/cart/",
        {
          headers: {
            projectId: "f104bi07c490",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setCartItems([]);
        setCartItemsNumber(0);
        ToasterMessage("success", "Order created successfull");
      }
    } catch (error) {
      ToasterMessage("error", error.message);
    }
  };
  const handleCheckout = (e) => {
    e.preventDefault();
    if (
      userInfo.name.length === 0 ||
      userInfo.mobileNo.length === 0 ||
      userAddress.street.length === 0 ||
      userAddress.city.length === 0 ||
      userAddress.state.length === 0 ||
      userAddress.zipCode.length === 0 ||
      userAddress.country.length === 0
    ) {
      ToasterMessage("error", "All fields are required");
    } else if (userInfo.mobileNo.length !== 10) {
      ToasterMessage("error", "Please enter a valid mobile number");
    } else {
      if (cartItems.length === 0) {
        ToasterMessage("error", "No products present in cart to order");
      }
      cartItems.map((item) => {
        const id = item.product._id;
        buyItems(id);
        if (setOrderSuccessfull) {
          removeAllCartItems();
          navigate("/account/orders/ordersucces");
        }
      });
    }
  };

  console.log(cartItems);
  if (!accessToken) {
    return navigate("/login");
  } else if (ispayment) {
    return (
      <div className="checkout-wrapper">
        <div className="checkout-container">
          <h3 className="deliver-title">Payment Details</h3>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <FloatingLabel
              controlId="cardNumber"
              label="Card Number"
              className="mb-3 checkout-label"
            >
              <Form.Control
                type="number"
                placeholder="Enter Card number"
                className="checkout-input"
                name="card_number"
                required
                onChange={(e) => handleCardInfoChange(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Card number
              </Form.Control.Feedback>
            </FloatingLabel>

          <FloatingLabel
              controlId="expiryDate"
              label="expiryDate"
              className="mb-3 checkout-label"
            >
              <Form.Control
                type="text"
                placeholder="MM/YY"
                className="checkout-input"
                name="exp_date"
                required
                onChange={(e) => handleCardInfoChange(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Card Expiry date
              </Form.Control.Feedback>
            </FloatingLabel>

          <FloatingLabel
              controlId="cvv"
              label="cvv"
              className="mb-3 checkout-label"
            >
              <Form.Control
                type="text"
                placeholder="Enter CVV"
                className="checkout-input"
                name="cvv"
                required
                onChange={(e) => handleCardInfoChange(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your cvv number
              </Form.Control.Feedback>
            </FloatingLabel>

        


            
            <Button className="buy-btn" type="submit" >
              Buy Now
            </Button>
          </Form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="checkout-wrapper">
        <div className="checkout-container">
          <h3 className="deliver-title">Delivery Address</h3>
          <Form noValidate validated={validated} >
            <FloatingLabel
              controlId="validationCustomUsername"
              label="Full Name"
              className="mb-3 checkout-label"
            >
              <Form.Control
                type="text"
                placeholder="Enter Full Name"
                className="checkout-input"
                name="name"
                required
                onChange={(e) => handleUserInfoChange(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Mobile Number"
              className="mb-3 checkout-label"
            >
              <Form.Control
                type="phone"
                placeholder="Enter Mobile Number"
                className="checkout-input"
                required
                name="mobileNo"
                onChange={(e) => handleUserInfoChange(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your mobile number
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Flat no./Street name/Building"
              className="mb-3 checkout-label"
            >
              <Form.Control
                type="text"
                placeholder="Enter Flat no./Street name/Building"
                className="checkout-input"
                required
                name="street"
                onChange={(e) => handleAddressChange(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your flat no./street name/building
              </Form.Control.Feedback>
            </FloatingLabel>

            <Row className="g-2">
              <Col md>
                <FloatingLabel
                  controlId="floatingInput"
                  label="City"
                  className="mb-3 checkout-label"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter City"
                    className="checkout-input"
                    required
                    name="city"
                    onChange={(e) => handleAddressChange(e)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your city
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>

              <Col md>
                <FloatingLabel
                  controlId="floatingInput"
                  label="State"
                  className="mb-3 checkout-label"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter State"
                    className="checkout-input"
                    required
                    name="state"
                    onChange={(e) => handleAddressChange(e)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your state
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>

              <Col md>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Country"
                  className="mb-3 checkout-label"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter Country"
                    className="checkout-input"
                    required
                    name="country"
                    onChange={(e) => handleAddressChange(e)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your country
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Col>
            </Row>

            <FloatingLabel
              controlId="floatingInput"
              label="Pincode /Postal Code /Zipcode"
              className="mb-3 checkout-label"
            >
              <Form.Control
                type="number"
                placeholder="Enter Pincode /Postal Code /Zipcode"
                className="checkout-input"
                required
                name="zipCode"
                onChange={(e) => handleAddressChange(e)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Pincode /Postal Code /Zipcode
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingSelect"
              label="Save address as"
              className="checkout-label"
            >
              <Form.Select
                aria-label="Floating label select example"
                className="checkout-input"
                name="addressType"
                onChange={(e) => handleAddressChange(e)}
              >
                <option value="Home">HOME</option>
                <option value="Office">OFFICE</option>
                <option value="Other">OTHER</option>
              </Form.Select>
            </FloatingLabel>
            <Button className="buy-btn" onClick={(e)=>{setispayment(true);
             e.preventDefault();
      e.stopPropagation();}} >
              Pay now
            </Button>
          </Form>
        </div>
      </div>
    );
  }
};

export default Checkout;
