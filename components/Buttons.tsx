"use client";

import { MdOutlineBackspace } from "react-icons/md";
import { buttons } from "@/data/buttons";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setHistory,
  setValue,
  setOperator,
  setLastOperator,
  setResult,
} from "@/lib/slices/displaySlice";

function Buttons() {
  const dispatch = useAppDispatch();

  const historyValue = useAppSelector((state) => state.displayReducer.history);

  const operatorValue = useAppSelector(
    (state) => state.displayReducer.operator
  );
  const displayValue = useAppSelector((state) => state.displayReducer.value);

  const displayLastOperator = useAppSelector(
    (state) => state.displayReducer.lastOperator
  );

  const displayResult = useAppSelector((state) => state.displayReducer.result);

  const handleClick = (title: string, action: string) => {
    switch (action) {
      case "clrDisplay":
        dispatch(setValue("0"));
        break;
      case "clrHistory":
        dispatch(setHistory([]));
        dispatch(setOperator([]));
        dispatch(setValue("0"));
        break;
      case "number":
        let number =
          displayValue === "0" || displayResult ? title : displayValue + title;
        dispatch(setValue(number));
        dispatch(setLastOperator(false));
        dispatch(setResult(false));
        break;
      case "dot":
        let dot = displayValue.includes(".")
          ? displayValue
          : displayValue + title;
        dispatch(setValue(dot));
        dispatch(setLastOperator(false));
        dispatch(setResult(false));
        break;
      case "backspace":
        let backspace =
          displayValue.substring(0, displayValue.length - 1) === ""
            ? "0"
            : displayValue.substring(0, displayValue.length - 1);
        dispatch(setValue(backspace));
        break;
      case "percentil":
        let percentil = String(eval(displayValue + "/100"));
        dispatch(setValue(percentil));
        break;
      case "operator":
        if (operatorValue.length === 0 && historyValue.length === 0) {
          dispatch(setOperator([...operatorValue, title]));
          dispatch(setHistory([...historyValue, displayValue]));
          dispatch(setValue("0"));
          dispatch(setLastOperator(true));
        } else {
          if (displayLastOperator) {
            const changeOperator = [...operatorValue];
            changeOperator.pop();
            dispatch(setOperator([...changeOperator, title]));
            break;
          }

          let operator = operatorValue[operatorValue.length - 1];
          let history = historyValue[historyValue.length - 1];

          let calc;
          if (operator === "=") {
            calc = displayValue;
          } else {
            calc = String(eval(history + operator + displayValue));
          }

          dispatch(setOperator([...operatorValue, title]));
          dispatch(setResult(true));
          dispatch(setLastOperator(true));
          dispatch(setValue(calc));
          dispatch(setHistory([...historyValue, displayValue, calc]));
        }
        break;
    }
  };

  return (
    <div className="grid grid-cols-4 gap-x-3 gap-y-2">
      {buttons.map((button, id) => (
        <button
          key={id}
          className="flex justify-center items-center w-14 h-14 rounded-full font-medium text-white text-lg"
          style={{
            backgroundColor: button.color,
          }}
          onClick={() => handleClick(button.title, button.action)}
        >
          {button.title === "BC" ? <MdOutlineBackspace /> : button.title}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
