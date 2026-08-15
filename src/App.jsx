// src/App.jsx
import React from 'react';
import Counter from './Components/CounterCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100 p-8 flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          React State & Events Practical
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Practical 3: Counter Application using the useState Hook
        </p>
      </div>

      {/* Render Counter Component */}
      <Counter />
    </div>
  );
}

export default App;