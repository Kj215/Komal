import React, { useState } from "react";
import "./ItemDetailsForm.css"; // Import the CSS file

const itemNames = [
  { label: "RING", value: "RING" },
  { label: "L RING", value: "L. RING" },
  { label: "G RING", value: "G. RING" },
  { label: "NECKLACE", value: "NECKLACE" },
  { label: "BRACELET", value: "BRACELET" },
  { label: "EARRINGS", value: "EARRINGS" },
  { label: "ANKLET", value: "ANKLET" },
  { label: "BROOCH", value: "BROOCH" },
  { label: "TOPS", value: "TOPS" },
  { label: "CHAIN", value: "CHAIN" },
  { label: "PENDANT", value: "PENDANT" },
  { label: "NOSE PIN", value: "NOSE PIN" },
  { label: "LOCKET", value: "LOCKET" },
  { label: "BANGLE", value: "BANGLE" },
  { label: "RAJKOT BALI", value: "RAJKOT BALI" },
  { label: "BELLY CHAIN", value: "BELLY CHAIN" },
  { label: "TOE RING", value: "TOE RING" },
  { label: "NAIL RING", value: "NAIL RING" },
  { label: "KUNDAL", value: "KUNDAL" },
  { label: "JITIYA", value: "JITIYA" },
  { label: "HIGHWAY", value: "C. HIGHWAY" },
  { label: "MADRASI JHUMKA", value: "M. JHUMKA" },
  { label: "DELHI JHUMKA", value: "JHUMKA" },
  { label: "DHOLNA", value: "DHOLNA" },
  { label: "DIAMOND RING", value: "DIAMOND RING" },
  { label: "SUI DHAGA", value: "SUI DHAGA" },
];
const hallmarks = [
  { label: "18K", value: "18K 750" },
  { label: "22K", value: "22K 750" },
  { label: "SILVER", value: "SILVER" },
];

const Owner = [
  { label: "SELF", value: "KJB" },
  { label: "RB", value: "RB" },
  { label: "BOM", value: "BOMBAY" },
  { label: "AMT", value: "AMRITSHAR" },
  { label: "BANARAS", value: "BANARAS" },
  { label: "DEL", value: "DELHI" },
  { label: "GAYATRI", value: "GAYATRI" },
  { label: "RADHIKA", value: "RADHIKA" },
  { label: "RAJKOT", value: "RAJKOT" },
];
const ItemDetailsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    itemName: "",
    weight: "",
    size: "",
    hallmark: "",
    shopName: "",
    HUID: "",
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
        Add Item
      </button>
    </form>
  );
};

export default ItemDetailsForm;
