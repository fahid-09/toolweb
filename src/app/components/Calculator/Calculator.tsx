"use client";

import styles from "./Calculator.module.css";
import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value: string) => {

    // AC
    if (value === "AC") {
      setDisplay("0");
    }

    // Numbers
    else if (!isNaN(Number(value))) {
      setDisplay(display === "0" ? value : display + value);
    }

    // Operators
    else if (["+", "−", "×", "÷"].includes(value)) {
      setDisplay(display + value);
    }

    // Decimal
    else if (value === ".") {
      setDisplay(display + ".");
    }

    // Percentage
    else if (value === "%") {
      setDisplay((Number(display) / 100).toString());
    }

    // Plus / Minus
    else if (value === "±") {
      setDisplay((Number(display) * -1).toString());
    }

    // Equal
    else if (value === "=") {
      const result = display
        .replace("×", "*")
        .replace("÷", "/")
        .replace("−", "-");

      setDisplay(eval(result).toString());
    }
  };

  const buttons = [
    "AC", "±", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "−",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  return (
    <div className={styles.calculator}>

      <input
        type="text"
        value={display}
        readOnly
        className={styles.display}
      />

      <div className={styles.buttons}>
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleClick(button)}
            className={button === "0" ? styles.zeroButton : button === "AC" ? styles.ACButton : button === "=" ? styles.equalButton :
              button === "×" ? styles.operatorButton
                :
                button === "÷" ? styles.operatorButton
                  :
                  button === "−" ? styles.operatorButton :
                    button === "+" ? styles.operatorButton : ""}
          >
            {button}
          </button>
        ))}
      </div>

    </div>
  );
}