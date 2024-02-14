"use client";
import React, { useState } from 'react';

const NewItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const item = {
      name: name,
      quantity: quantity,
      category: category
    };

    console.log(item);

    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name Field */}
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          id="name"
          type="text" 
          value={name} 
          onChange={(event) => setName(event.target.value)} 
          required 
        />
      </div>

      {/* Quantity Field */}
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input 
          id="quantity"
          type="number" 
          min="1" 
          max="99" 
          value={quantity}
          fontcolor="black"
          onChange={(event) => setQuantity(Number(event.target.value))} 
          required 
          class="text-black"
        />
      </div>

      {/* Category Field */}
      <div>
        <label htmlFor="category" >Category:</label>
        <select 
          id="category" 
          value={category} 
          onChange={(event) => setCategory(event.target.value)}
          class="text-black">
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" >
        Submit
      </button>
    </form>
  );
};

export default NewItem;
