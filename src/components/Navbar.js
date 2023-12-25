import React, { useState } from "react";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const fetchAPIData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/ecommerce/clothes/categories",
        {
          method: "GET",
          headers: {
            projectId: "f104bi07c490",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonResponse = await response.json();

      if (jsonResponse.status === "success") {
        setCategories(
          jsonResponse.data.map((category) => ({ name: category }))
        );
      } else {
        throw new Error(`API error! Status: ${jsonResponse.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      setShowCategories((prevShowCategories) => !prevShowCategories);
    }
  };

  return (
    <div className="navbar bg-gray-800 p-4 text-white">
      <button
        className="load-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchAPIData}
      >
        Categories
      </button>
      {showCategories && (
        <div className="category-list mt-4">
          {loading ? (
            <p>Loading...</p>
          ) : categories.length > 0 ? (
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="py-2 border-b border-gray-600 last:border-b-0"
                >
                  {category.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>No categories available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
