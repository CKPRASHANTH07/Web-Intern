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
    <div className='relative h-auto px-1 py-5 mb-5 border-2 rounded-lg w-80'>
     <div className="flex flex-col px-2 mt-4 gap-y-2">
         
       <label className="font-bold font-Inter">
       Category
       </label>
          <select
           id="category"
           value={selectedCategory}
           onChange={handleCategoryChange}
           className="px-2 py-1 my-5 font-bold border rounded font-Inter"
          >
           <option value="" className="font-semibold font-Inter">None</option>
           {categories.map((category, index) => (
             <option key={index} value={category} className="my-10 font-semibold font-Inter">
               {category}
             </option>
           ))}
         </select>
      </div>
    </div>
  )
}