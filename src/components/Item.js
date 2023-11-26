import React, { useState } from "react";

function Item({ name, category }) {
  // Use state to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Event handler for adding/removing from the cart
  const handleCartToggle = () => {
    // Toggle the value of isInCart
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Change button text based on isInCart state */}
      <button className="add" onClick={handleCartToggle}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

