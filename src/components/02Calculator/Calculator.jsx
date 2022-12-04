import React from "react";
import s from "./Calculator.module.css";

const Calculator = () => {
  return (
    <div className={s.container}>
      <div className={s.mainCalculatorBody}>
        <div className={s.mainCalculatorBody}>
          <button>C</button>
          <button>+/-</button>
          <button>%</button>
          <button>/</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
