import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => (count > 0 ? setCount(count - 1) : "");
    const [countArray, setCountArray] = useState([]);
    const recordCurrentCount = () => {
        setCountArray((countArray) => [count, ...countArray]);
    };
    const resetCounterAndArray = () => {
      setCountArray([]);
      setCount(0);
    };

    return (
        <div className="App">
            <h1>Counter That Records</h1>
            <h2>Current Count: {count}</h2>
            <button onClick={() => handleIncrement()}>Increase</button>
            <button onClick={() => handleDecrement()}>Decrease</button>
            <br />
            <br />
            <h3>Current Count Recorder</h3>
            <button onClick={() => recordCurrentCount()}>Record</button>
            <button onClick={() => resetCounterAndArray()}>Reset</button>
            <ul>
                {countArray.map((currentCount, index) => (
                    <li key={index}>
                        <h4>Recorded Current Count: {currentCount}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
