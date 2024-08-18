import React, { useState } from 'react';
import ItemDetailsPrintWrapper from './ItemDetailsPrintWrapper';
import ItemDetailsForm from './ItemDetailsForm';
import LoginForm from './LoginForm';
import './App.css';
import logo from './Hallmark.svg';
const user = process.env.REACT_APP_USERNAME
const password = process.env.REACT_APP_PASSWORD

const App = () => {
  const [items, setItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingItemIndex, setEditingItemIndex] = useState(null);

  const handleFormSubmit = (formData) => {
    if (editingItemIndex !== null) {
      // If editing, update the item
      const updatedItems = items.map((item, index) =>
        index === editingItemIndex ? { ...formData, barcode: item.barcode, logo: item.logo } : item
      );
      setItems(updatedItems);
      setEditingItemIndex(null); // Reset editing state
    } else {
      // If not editing, add a new item
      const newItem = {
        ...formData,
        barcode: '10101010101010101010101010101010101010101010101', // Static barcode
        logo: logo, // Static logo
      };
      setItems([...items, newItem]);
    }
  };

  const handleLogin = (credentials) => {
    // Replace this with your authentication logic
    if (credentials.username === user && credentials.password === password) {
      setIsAuthenticated(true);
    } else {
      alert( 'Invalid username or password')  ;
    }
  };
  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleEditItem = (index) => {
    const itemToEdit = items[index];
    setEditingItemIndex(index); // Set the index of the item being edited
  };

  return (
    <div className="app">
      {!isAuthenticated ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <ItemDetailsForm 
            onSubmit={handleFormSubmit} 
            initialData={editingItemIndex !== null ? items[editingItemIndex] : null} // Pass initial data if editing
          />
          {items.length > 0 && <ItemDetailsPrintWrapper items={items} onRemoveItem={handleRemoveItem} onEditItem={handleEditItem} />}
        </>
      )}
    </div>
  );
};

export default App;
