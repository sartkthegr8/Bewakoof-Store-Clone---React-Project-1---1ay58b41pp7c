import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const projectId = "f104bi07c490";

  useEffect(() => {
    // Fetch categories when the component mounts
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories",
          {
            headers: {
              projectId: projectId,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setCategories(data); // Assuming the API response is an array of categories
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    };

    fetchCategories();
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          {categories.map((category) => (
            <a key={category.id} href="#">
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
