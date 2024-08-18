import React, { useState, useEffect } from "react";
import ItemDetailsPrintWrapper from "./ItemDetailsPrintWrapper";
import ItemDetailsForm from "./ItemDetailsForm";
import LoginForm from "./LoginForm";
import "./App.css";
import logo from "./Hallmark.svg";

const user = process.env.NODE_ENV === 'development'
  ? process.env.REACT_APP_USERNAME // Local development URL
  :process.env.REACT_APP_USERNAME; // GitHub Pages URLS

const password = process.env.NODE_ENV === 'development'
? process.env.REACT_APP_PASSWORD // Local development URL
:process.env.REACT_APP_PASSWORD; // GitHub Pages URL


const App = () => {
  const [items, setItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingItemIndex, setEditingItemIndex] = useState(null);
  const [showWarning, setShowWarning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    let timer;
    if (isAuthenticated) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      if (remainingTime === 600) {
        setShowWarning(true); // Show warning at 10 minutes remaining
      }

      if (remainingTime === 0) {
        setShowWarning(false);
        handleLogout(); // Logout when time runs out
      }
    }

    return () => clearInterval(timer); // Cleanup on unmount or logout
  }, [isAuthenticated, remainingTime]);

  const handleFormSubmit = (formData) => {
    if (editingItemIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editingItemIndex
          ? { ...formData, barcode: item.barcode, logo: item.logo }
          : item
      );
      setItems(updatedItems);
      setEditingItemIndex(null); // Reset editing state
    } else {
      const newItem = {
        ...formData,
        barcode: "10101010101010101010101010101010101010101010101",
        logo: logo,
      };
      setItems([...items, newItem]);
    }
  };

  const handleLogin = (credentials) => {
    if (credentials.username === user && credentials.password === password) {
      setIsAuthenticated(true);
      setRemainingTime(3600); // Reset session time on login
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setItems([]);
    setEditingItemIndex(null);
    setRemainingTime(3600); // Reset session time on logout
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEditItem = (index) => {
    setEditingItemIndex(index); // Set the index of the item being edited
  };

  const closeWarning = () => {
    setShowWarning(false); // Close the warning popup
  };

  return (
    <div className="app">
      {!isAuthenticated ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <button
            className="logout-button"
            onClick={handleLogout}
            aria-label="Logout"
          > 
          <div>LogOut</div>
            {/* Icon is added via CSS */}
          </button>
          <ItemDetailsForm
            onSubmit={handleFormSubmit}
            initialData={
              editingItemIndex !== null ? items[editingItemIndex] : null
            }
          />
          {items.length > 0 && (
            <ItemDetailsPrintWrapper
              items={items}
              onRemoveItem={handleRemoveItem}
              onEditItem={handleEditItem}
            />
          )}

          {showWarning && (
            <div className="warning-popup">
              <p>
                You have 10 minutes left to print your items before the session
                ends.
              </p>
              <button onClick={closeWarning} className="close-button">
                ×
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
