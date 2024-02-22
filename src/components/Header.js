import { useState } from "react";

const Header = () => {

  const [logBtn,setLogBtn]=useState("login");
  // let logBtn = "login"; 
  const togglelogBtn = ()=>{
    if(logBtn==="login"?setLogBtn("logout"):setLogBtn("login"));
  }
  
  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="logo-container">
          
          <img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="Logo" className="h-8" />
        </div>

        <div className="nav-items">
          <ul className="flex space-x-4">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact Us</li>
            <li className="cursor-pointer">Cart</li>
            <button 
             className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
             onClick={togglelogBtn}
            >
              {logBtn}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
