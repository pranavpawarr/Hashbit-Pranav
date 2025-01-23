import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleAddition = () => setResult(Number(num1) + Number(num2));
  const handleSubtraction = () => setResult(Number(num1) - Number(num2));
  const handleMultiplication = () => setResult(Number(num1) * Number(num2));
  const handleDivision = () => {
    if (num2 === "0" || num2 === "") {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Calculator</h1>
      <div>
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleAddition}>Add</button>
        <button onClick={handleSubtraction}>Subtract</button>
        <button onClick={handleMultiplication}>Multiply</button>
        <button onClick={handleDivision}>Divide</button>
      </div>
      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        <strong>Result: </strong> {result !== null ? result : "No calculation yet"}
      </div>
    </div>
  );
};

export default Calculator;
