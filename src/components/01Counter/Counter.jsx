import React from "react";
import s from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [editMode, setEditMode] = React.useState(false);
  const [value, setValue] = React.useState(count);

  const changeMode = () => {
    if (editMode) {
      setCount(value);
      setEditMode(false);
    } else {
      setEditMode(true);
      setValue(count);
    }
  };

  return (
    <>
      <h3>Реализация простого счетчика</h3>
      <h3>Счетчик умеет увеличивать и уменьшать числа</h3>
      <h3>Возможность ввода числа при нажатии на счетчик</h3>
      <div className={s.container}>
        <button
          className={s.button}
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          -
        </button>
        <div className={s.countBlock} onClick={changeMode}>
          {editMode ? (
            <input
              autoFocus
              className={s.input}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={changeMode}
            />
          ) : (
            <div className={s.numberTop}>{count}</div>
          )}
        </div>
        <button
          className={s.button}
          onClick={() => setCount((prevCount) => +prevCount + 1)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
