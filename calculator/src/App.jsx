// Imports
import styles from './components/Calculator/Calc.module.scss';
import React, { useState } from "react";

export default function App() {
  // Deklarerer en state variabel 'result' og dens setter 'setResult', initialiseret som en tom streng.
  const [result, setResult] = useState("");

  // Håndterer knaptryk for tal og operator input.
  const handleClick = (e) => {
    const value = e.target.name;  // Henter værdien af knappen.

    // Tjekker om input er en operator og sikre, at der ikke er to på hinanden følgende.
    if (["/", "*", "-", "+", "."].includes(value)) {
      // Hvis resultatet er tomt eller slutter med en operator, gør ingenting.
      if (!result || ["+", "-", "*", "/", "."].includes(result.slice(-1))) return;
    }

    // Opdaterer resultatet ved at tilføje værdien af knappen.
    setResult(result + value);
  };

  // Rydder resultatet (nulstiller input).
  const clear = () => setResult("");

  // Fjerner sidste tegn i resultatet.
  const backSpace = () => setResult(result.slice(0, -1));

  // Håndterer beregningen og evaluerer udtrykket.
  const handleCalculation = () => {
    try {
      // Evaluerer udtrykket i resultat og konverterer det til en streng.
      setResult(eval(result).toString());
    } catch {
      // Hvis der opstår en fejl, sættes resultatet til "Error".
      setResult("Error");
    }
  };

  return (
    <div className={styles.Buttons}>
      {/* Viser resultatet i et input-felt */}
      <input type="text" value={result} readOnly />
      <br />
      {/* Knappen til at rydde hele resultatet */}
      <button onClick={clear}>Clear</button>
      {/* Knappen til at slette sidste tegn */}
      <button onClick={backSpace}>C</button>
      {/* Operator knap til division */}
      <button name="/" onClick={handleClick}>÷</button>
      <br />
      {/* Knapperne til tallene 7, 8 og 9 */}
      <button name="7" onClick={handleClick}>7</button>
      <button name="8" onClick={handleClick}>8</button>
      <button name="9" onClick={handleClick}>9</button>
      {/* Operator knap til multiplikation */}
      <button name="*" onClick={handleClick}>x</button>
      <br />
      {/* Knapperne til tallene 4, 5 og 6 */}
      <button name="4" onClick={handleClick}>4</button>
      <button name="5" onClick={handleClick}>5</button>
      <button name="6" onClick={handleClick}>6</button>
      {/* Operator knap til subtraktion */}
      <button name="-" onClick={handleClick}>&ndash;</button>
      <br />
      {/* Knapperne til tallene 1, 2 og 3 */}
      <button name="1" onClick={handleClick}>1</button>
      <button name="2" onClick={handleClick}>2</button>
      <button name="3" onClick={handleClick}>3</button>
      {/* Operator knap til addition */}
      <button name="+" onClick={handleClick}>+</button>
      <br />
      {/* Knapperne til decimalpunkt og 0 */}
      <button name="." onClick={handleClick}>.</button>
      <button name="0" onClick={handleClick}>0</button>
      {/* Knap til at beregne resultatet */}
      <button onClick={handleCalculation}>=</button>
    </div>
  );
}
