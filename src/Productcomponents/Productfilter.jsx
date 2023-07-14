import { useState } from "react";
import React from 'react'

export default function Productfilter() {
    const [selectedCategory, setSelectedCategory] = useState('');
  
    // Define your filter and subfilter options
    const categories = ['Category1', 'Category2', 'Category3'];
  
    // Handle filter selection
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };


  return (
    <div className='relative w-80 h-auto border-2 rounded-lg px-1 py-5 mb-5'>
     <div className="flex flex-col mt-4 px-2 gap-y-2">
         
       <label className="font-Inter font-bold">
       Category
       </label>
          <select
           id="category"
           value={selectedCategory}
           onChange={handleCategoryChange}
           className="border rounded px-2 py-1"
          >
           <option value="" className="font-Inter font-semibold">None</option>
           {categories.map((category, index) => (
             <option key={index} value={category}>
               {category}
             </option>
           ))}
         </select>
      </div>
    </div>
  )
}