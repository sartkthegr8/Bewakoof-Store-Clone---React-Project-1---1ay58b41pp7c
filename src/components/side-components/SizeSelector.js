import React, { useState } from "react";

function SizeSelector({ sizes=[], onSizeChange }) {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (event) => {
    const newSize = event.target.value;
    setSelectedSize(newSize);
    onSizeChange(newSize);
  };

  return (
    <div className="size-container">
      {/* <h3>Select Size:</h3> */}
      <div>
        {sizes.map((size) => (
          <label
            key={size}
            style={{
              display: "inline-block",
              marginRight: "10px",
              borderRadius: "5px",
              border: `2px solid ${selectedSize === size ? "blue" : "gray"}`,
              padding: "5px",
              width: "40px",
              textAlign:'center',
              backgroundColor: selectedSize === size ? "lightblue" : "white",
              cursor: "pointer",
            }}
          >
            <input
              className="size-item"
              type="radio"
              value={size}
              style={{ display: "none" }}
              checked={selectedSize === size}
              onChange={handleSizeChange}
            />
            {size}
          </label>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;
