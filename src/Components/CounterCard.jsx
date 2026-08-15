// src/Counter.jsx
import React, { useState } from 'react';

function Counter() {
  // Initialize state variable 'count' at 0 using useState hook
  const [count, setCount] = useState(0);

  // Event handler functions
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100 max-w-md w-full text-center transform transition duration-300 hover:scale-105">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-2">Interactive Counter</h2>
      <p className="text-gray-500 text-sm mb-6">Demonstrating useState Hook & Event Handling</p>

      {/* Counter Display */}
      <div className="my-6">
        <span className={`text-6xl font-black ${count > 0 ? 'text-emerald-600' : count < 0 ? 'text-rose-600' : 'text-indigo-600'}`}>
          {count}
        </span>
      </div>

      {/* Button Controls */}
      <div className="flex justify-center space-x-4 mb-6">
        <button 
          onClick={handleDecrement}
          className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-lg transition duration-200 transform active:scale-95"
        >
          Decrease (-)
        </button>
        <button 
          onClick={handleReset}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-lg transition duration-200 transform active:scale-95"
        >
          Reset
        </button>
        <button 
          onClick={handleIncrement}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 px-5 rounded-xl shadow-lg transition duration-200 transform active:scale-95"
        >
          Increase (+)
        </button>
      </div>

      {/* Footer Info using properties from previous context */}
      <div className="border-t border-gray-100 pt-4 text-xs text-gray-500 space-y-1">
        <p><span className="font-semibold text-gray-700">Student:</span> Manish kumar</p>
        <p><span className="font-semibold text-gray-700">Course:</span> BCA Hons (Semester V)</p>
        <p><span className="font-semibold text-gray-700">City:</span> Aburoad</p>
      </div>
    </div>
  );
}

export default Counter;