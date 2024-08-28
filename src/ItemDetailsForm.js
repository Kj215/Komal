import React, { useState,useEffect } from "react";
import "./ItemDetailsForm.css"; // Import the CSS file

const itemNames = [
  { label: "RING", value: "RING" },
  { label: "L RING", value: "L.RING" },
  { label: "G RING", value: "G.RING" },
  { label: "NECKLACE", value: "NECKLACE" },
  { label: "BRACELET", value: "BRACELET" },
  { label: "EARRINGS", value: "EARRING" },
  { label: "ANKLET", value: "ANKLET" },
  { label: "BROOCH", value: "BROOCH" },
  { label: "TOPS", value: "TOPS" },
  { label: "CHAIN", value: "CHAIN" },
  { label: "PENDANT", value: "PENDANT" },
  { label: "NOSE PIN", value: "NOSEPIN" },
  { label: "LOCKET", value: "LOCKET" },
  { label: "BANGLE", value: "BANGLE" },
  { label: "RAJKOT BALI", value: "RJ BALI" },
  { label: "BELLY CHAIN", value: "CHAIN" },
  { label: "TOE RING", value: "TOE RING" },
  { label: "NAIL RING", value: "NAILRING" },
  { label: "KUNDAL", value: "KUNDAL" },
  { label: "JITIYA", value: "JITIYA" },
  { label: "HIGHWAY", value: "C.HIGHWAY" },
  { label: "MADRASI JHUMKA", value: "JHUMKA" },
  { label: "DELHI JHUMKA", value: "JHUMKA" },
  { label: "DHOLNA", value: "DHOLNA" },
  { label: "DIAMOND RING", value: "DI.RING" },
  { label: "SUI DHAGA", value: "SUI DHAGA" },
  { label: "AMRITSAR BALI", value: "AMT. BALI" },
];
const hallmarks = [
  { label: "18K", value: "18K 750" },
  { label: "22K", value: "22K 916" },
  { label: "SILVER65", value: "SILVER 65" },
  { label: "SILVER70", value: "SILVER 70" },
  { label: "SILVER916", value: "SILVER 916" },
];

const Owner = [
  { label: "SELF", value: "KJB" },
  { label: "RB", value: "RB" },
  { label: "BOMBAY", value: "BOM" },
  { label: "AMRITSAR", value: "AMT" },
  { label: "BANARAS", value: "BANA" },
  { label: "DELHI", value: "DEL" },
  { label: "GAYATRI", value: "GTR" },
  { label: "RADHIKA", value: "RAD" },
  { label: "RAJKOT", value: "RAJ" },
];
const ItemDetailsForm = ({ onSubmit,initialData}) => {
  const [formData, setFormData] = useState({
    itemName: "",
    weight: "",
    size: "",
    hallmark: "",
    shopName: "",
    HUID: "",
  });
  useEffect(() => {
    if (initialData) {
      setFormData(initialData); // Populate form with initial data if editing
    }
  }, [initialData]);

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
      itemName: "",
      weight: "",
      size: "",
      hallmark: "",
      HUID: "",
      shopName: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="item-details-form">
      <div>
        <label>Owner:</label>
        <select
          name="shopName"
          value={formData.shopName}
          onChange={handleChange}
          required
        >
          <option value="">--Select Owner--</option>
          {Owner.map((shopName, index) => (
            <option key={index} value={shopName.value}>
              {shopName.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Item Name:</label>
        <select
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          required
        >
          <option value="">--Select Item--</option>
          {itemNames.map((itemName, index) => (
            <option key={index} value={itemName.value}>
              {itemName.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Weight:</label>
        <input
          type="number"
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
        <select
          name="hallmark"
          value={formData.hallmark}
          onChange={handleChange}
          required
        >
          <option value="">--Select Hallmark--</option>
          {hallmarks.map((hallmark, index) => (
            <option key={index} value={hallmark.value}>
              {hallmark.label}
            </option>
          ))}
        </select>
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
        {initialData ? 'Update Item' : 'Add Item'}
      </button>
    </form>
  );
};

export default ItemDetailsForm;
