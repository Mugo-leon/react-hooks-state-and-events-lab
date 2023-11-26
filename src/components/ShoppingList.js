import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Use state to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Event handler for the select element's change event
  const handleCategoryChange = (event) => {
    // Update the selectedCategory state when the value changes
    setSelectedCategory(event.target.value);
  };

  // Filter the items based on the selected category
  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* Attach the event handler to the select element */}
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* Map over the filtered items */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

