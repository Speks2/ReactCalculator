import { useState } from "react";
import styles from './components/Calculator/Calc.module.scss';

export default function App() {
const [currentState, setCurrentState] = useState(0);
return (
<div>
  <button
    className={styles.Button1}
    name="1"
    value={1}
    onClick={() => setCurrentState(1)} 
  >
    1
  </button>
  <button
    className={styles.Button2}
    name="2"
    value={2}
    onClick={() => setCurrentState(2)}
  >
    2
  </button>
  <button className={styles.Plus} name="+" onClick={() => 
  setCurrentState("+")}>
    +
  </button>
  <button
    className={styles.Equals}
    name="="
    onClick={() => setCurrentState()}
  >
    =
  </button>
  <button
    className={styles.Reset}
    name="reset"
    value={0}
    onClick={() => setCurrentState(0)} //when clicked it will set to 0
  >
    0
  </button>
  <h2>{currentState}</h2>
  </div>
  );
  }