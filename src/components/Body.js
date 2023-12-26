import { useState, useEffect } from "react";
import ClothCard from "./ClothCard";

const Body = () => {
  // State to hold the list of clothes
  const [list, setList] = useState([]);
  // State to hold the search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");
  // State to indicate whether data is currently being loaded
  const [loading, setLoading] = useState(true);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetchAPIData();
  }, []);

  // Function to fetch data from the API
  const fetchAPIData = async () => {
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/ecommerce/clothes/products",
        {
          method: "GET",
          headers: {
            projectId: "f104bi07c490",
          },
        }
      );

      const json = await response.json();
      // Update the list state with the fetched data
      setList(json.data);
      // Set loading to false once data is fetched
      setLoading(false);
    } catch (error) {
      // Log an error if data fetching fails
      console.error("Error fetching data:", error);
      // Set loading to false in case of an error
      setLoading(false);
    }
  };
  //Shimmering 
  // if(list.length===0){
  //   return <h1>Loading.....</h1>
  // }

  // Function to filter the list based on ratings
  const handleFilter = () => {
    const filterList = list.filter((res) => res.ratings > 3);
    // Update the list state with the filtered data
    setList(filterList);
  };

  // Function to filter the list based on the search term
  const handleSearch = () => {
    const searchResult = list.filter((cloth) =>
      cloth.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update the list state with the search result
    setList(searchResult);
  };

  // Function to reset the search and fetch original data
  const handleReset = () => {
    // Fetch the original data
    fetchAPIData();
    // Reset the search term
    setSearchTerm("");
  };

  return list.length===0 ? <h1>Loading.....</h1> : (
    <div className="body min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center">
          {/* Filter Section */}
          <div className="filter">
            <button
              className="filter-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleFilter}
            >
              Top Rated
            </button>
          </div>
          {/* Search Section */}
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 rounded focus:outline-none focus:border-blue-500"
            />
            <button
              className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSearch}
            >
              Search
            </button>
            {/* Reset Button */}
            <button
              className="ml-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
        {/* Display Clothes */}
        <div className="cloth-container mt-8 flex flex-wrap -mx-4">
          {list.map((cloth) => (
            <ClothCard key={cloth._id} dData={cloth} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
