import React, { useState } from 'react';
import './ItemDetailsForm.css';  // Import the CSS file

const ItemDetailsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    itemName: '',
    weight: '',
    size: '',
    hallmark: '',
    HUID: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      itemName: '',
      weight: '',
      size: '',
      hallmark: '',
      HUID: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="item-details-form">
      <div>
        <label>Item Name:</label>
        <input 
          type="text" 
          name="itemName" 
          value={formData.itemName} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div>
        <label>Weight:</label>
        <input 
          type="text" 
          name="weight" 
          value={formData.weight} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div>
        <label>Size:</label>
        <input 
          type="text" 
          name="size" 
          value={formData.size} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div>
        <label>Hallmark:</label>
        <input 
          type="text" 
          name="hallmark" 
          value={formData.hallmark} 
          onChange={handleChange} 
          required 
        />
      </div>

      <div>
        <label>HUID:</label>
        <input 
          type="text" 
          name="HUID" 
          value={formData.HUID} 
          onChange={handleChange} 
          required 
        />
      </div>

      <button type="submit" className="add-item-button">
        Add Item
      </button>
    </form>
  );
};

export default ItemDetailsForm;
