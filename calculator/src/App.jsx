import styles from './components/Calculator/Calc.module.scss';
import React, { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");

  const op = ["/", "*", "-", "+", "."];

  const handleChange = (e) => {
    setResult(e.target.value);
  };

  const handleClick = (e) => {
    console.log(result);
    if (
      (op.includes(e.target.name) && result === "") ||
      (op.includes(e.target.name) && op.includes(result.slice(-1)))
    )
      return;
    if (result.indexOf(".") !== -1)
     

      setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backSpace = () => {
    
    setResult(result.slice(0, -1));
  };

  const handleCalculation = () => {
    if (op.includes(result.slice(-1))) return;
    setResult(eval(result).toString());
  };

  return (
    <div className={styles.Buttons}>
      <input type="text" value={result} onChange={handleChange} />
      <br />
      <button onClick={clear}>clear</button>
      <button onClick={backSpace}>C</button>
      <button name="/" onClick={handleClick}>
        ÷
      </button>
      <br />
      <button name="7" onClick={handleClick}>
        7
      </button>
      <button name="8" onClick={handleClick}>
        8
      </button>
      <button name="9" onClick={handleClick}>
        9
      </button>
      <button name="*" onClick={handleClick}>
        x
      </button>
      <br />
      <button name="4" onClick={handleClick}>
        4
      </button>
      <button name="5" onClick={handleClick}>
        5
      </button>
      <button name="6" onClick={handleClick}>
        6
      </button>
      <button name="-" onClick={handleClick}>
        &ndash;
      </button>
      <br />
      <button name="1" onClick={handleClick}>
        1
      </button>
      <button name="2" onClick={handleClick}>
        2
      </button>
      <button name="3" onClick={handleClick}>
        3
      </button>
      <button name="+" onClick={handleClick}>
        +
      </button>
      <br />
      <button name="." onClick={handleClick}>
        .
      </button>
      <button name="0" onClick={handleClick}>
        0
      </button>
      <button onClick={handleCalculation}>=</button>
    </div>
  );
}
