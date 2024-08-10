import React, { useState, useMemo } from "react";
import "./App.css";
const App = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(160);

  function onWeightChange(event) {
    setWeight(event.target.value);
  }

  function onHeightChange(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(2);
  }, [weight, height]);
  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          min="40"
          max="110"
          step={1}
          onChange={onWeightChange}
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          type="range"
          min="140"
          max="200"
          step={1}
          onChange={onHeightChange}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is:</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
};

export default App;
