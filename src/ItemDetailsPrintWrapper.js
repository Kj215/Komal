import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ItemDetails from './ItemDetails'; // Import your ItemDetails component
import './ItemDetailsCard.css'; // Import the new card styles

const ItemDetailsPrintWrapper =  ({ items, onRemoveItem, onEditItem}) => {
  const componentRef = useRef();

  return (
    <div>
      {/* This div will contain all the items to be printed */}
      <div ref={componentRef} className="card-container">
        {items.map((item, index) => (
          <div key={index} className="card ">
            <ItemDetails 
              itemName={item.itemName}
              barcode={item.barcode}
              weight={item.weight}
              size={item.size}
              hallmark={item.hallmark}
              HUID={item.HUID}
              shopName={item.shopName}
              logo={item.logo}
            />
            <button 
              className="remove-button" 
              onClick={() => onRemoveItem(index)}
              data-tooltip="THIS WILL REMOVE THE ITEM"
            >
              ×
            </button>
            <button 
              className="edit-button" 
              onClick={() => onEditItem(index)} // Call the edit function
              data-tooltip="THIS WILL HELP TO EDIT"
            >
              ✎
            </button>
          </div>
        ))}
      </div>
      
      {/* Print button to trigger printing of all items */}
      <ReactToPrint
        trigger={() => <button className="print-button">Print All Items</button>}
        content={() => componentRef.current}
        documentTitle="Item Details"
      />
    </div>
  );
};

export default ItemDetailsPrintWrapper;
