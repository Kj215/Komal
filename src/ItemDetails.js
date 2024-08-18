import React, {forwardRef} from 'react';
import './ItemDetails.css'; // Importing the CSS file
const stringToBinary = (input) => {
  return input.split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('')
    .slice(0, 14); // Limit the binary string to 20 characters
};

const getTodayDate = () => {
  const today = new Date();
  const month = today.getMonth() + 1; // Months are zero-based
  const year = today.getFullYear().toString().slice(-2); // Last two digits of the year
  return `${month}/${year}`; // Remove leading zero from month
};
const ItemDetails = forwardRef(({ itemName, barcode, weight, size, hallmark, HUID, shopName, logo },ref) => {
  barcode = `${stringToBinary(itemName)}-${stringToBinary(weight)}-${stringToBinary(hallmark)}`;
  return (
    <div className="item-details-container printable-area" ref={ref} >
      {/* First Column: Item Name and Barcode */}
      <div className="column first-column">
        <div className="item-name">{itemName}</div>
        <div className="barcode">
          {barcode.split('').map((bar, index) => (
            <span key={index} className={`barcode-bar ${bar === '1' ? 'bar' : 'space'}`}></span>
          ))}
        </div>
        <div className="item-name-date">{getTodayDate()}</div>
      </div>

      {/* Second Column: Details */}
      
      <div className="column second-column">
      <div className="detail-row">
          <span className="detail-label-shop">{shopName} ({hallmark})</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Weight:</span>
          <span className="detail-value">{weight} gm</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Size:</span>
          <span className="detail-value">{size}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">HUID:</span>
          <span className="detail-value">{HUID}</span>
        </div>
        
      </div>

      {/* Third Column: Logo */}
      <div className="column third-column">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
});

export default ItemDetails;
