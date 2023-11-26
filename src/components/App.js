import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Use the useState hook to create a state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Event handler for toggling dark mode
  const toggleDarkMode = () => {
    // Toggle the value of isDarkMode
    setIsDarkMode(!isDarkMode);
  };

  // Dynamically set the className based on the isDarkMode state
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Attach the event handler to the button */}
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

