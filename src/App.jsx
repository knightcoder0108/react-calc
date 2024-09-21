import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateInputs = () => {
    if (!num1) {
      setError("Num 1 Cannot Be Empty");
      setSuccess("");
      return false;
    }
    if (!num2) {
      setError("Num 2 Cannot Be Empty");
      setSuccess("");
      return false;
    }
    setError("");
    return true;
  };

  const handleCalculation = (operation) => {
    if (!validateInputs()) return;

    let res = 0;
    switch (operation) {
      case "+":
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case "/":
        res = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        return;
    }
    setResult(res);
    setSuccess("Success!");
  };

  return (
    <div className="calculator-container">
      <h1>React Calculator</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Num 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Num 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div className="button-container">
          <button onClick={() => handleCalculation("+")}>+</button>
          <button onClick={() => handleCalculation("-")}>-</button>
          <button onClick={() => handleCalculation("*")}>*</button>
          <button onClick={() => handleCalculation("/")}>/</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {result !== null && (
          <>
            <p className="success-message">{success}</p>
            <p className="result-message">Result: {result}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
