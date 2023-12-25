import { useState, useEffect } from "react";
import ClothCard from "./ClothCard";

const Body = () => {
  const [list, setList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

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
      setList(json.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  const handleFilter = () => {
    const filterList = list.filter((res) => res.ratings > 3);
    setList(filterList);
  };

  const handleSearch = () => {
    const searchResult = list.filter((cloth) =>
      cloth.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setList(searchResult);
  };

  return (
    <div className="body min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center">
          <div className="filter">
            <button
              className="filter-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleFilter}
            >
              Top Rated
            </button>
          </div>
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
          </div>
        </div>
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
