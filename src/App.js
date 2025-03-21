import React, { useState } from "react";
import { calculateLoanDetails } from "./utils/calculateLoanDetails";
import "./App.css"; // Import CSS for styling

function App() {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [tenure, setTenure] = useState("");
    const [result, setResult] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    const handleCalculate = () => {
        const details = calculateLoanDetails(Number(principal), Number(rate), Number(tenure));
        setResult(details);
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
            <div className="toggle-container">
                <label className="switch">
                    <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
                    <span className="slider">
                        {darkMode ? "☀️" : "🌙"}
                    </span>
                </label>
            </div>

            <div className="calculator-container">
                <h1>Loan EMI Calculator</h1>
                <div>
                    <label>Principal Amount (KSh): </label>
                    <input
                        type="number"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                    />
                </div>
                <div>
                    <label>Annual Interest Rate (%): </label>
                    <input
                        type="number"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Loan Tenure (Years): </label>
                    <input
                        type="number"
                        value={tenure}
                        onChange={(e) => setTenure(e.target.value)}
                    />
                </div>

                <button onClick={handleCalculate}>Calculate EMI</button>

                {result && (
                    <div className="result">
                        <h2>Results:</h2>
                        <p>Monthly EMI: KSh {result.monthlyEMI}</p>
                        <p>Total Interest: KSh {result.totalInterest}</p>
                        <p>Total Amount Payable: KSh {result.totalAmount}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
