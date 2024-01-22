"use client";

import { useState, useRef, useEffect } from "react";
import { MdHistory, MdDelete } from "react-icons/md";
import { useAppSelector } from "@/lib/hooks";
import { setHistory, setValue } from "@/lib/slices/displaySlice";

function Display() {
  const historyValue = useAppSelector((state) => state.displayReducer.history);
  const operatorValue = useAppSelector(
    (state) => state.displayReducer.operator
  );
  const displayValue = useAppSelector((state) => state.displayReducer.value);

  const [showHistory, setShowHistory] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        showHistory
      ) {
        setShowHistory(!showHistory);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  console.log(historyValue);
  console.log(operatorValue);

  function historyDisplay() {
    return(
      <div>teste</div>
    )
  }

  return (
    <div className="relative px-3 py-2 w-full h-24 bg-gray-800 rounded">
      <div className="flex justify-between items-center text-slate-400">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="text-2xl"
        >
          <MdHistory />
        </button>
        <div className="font-tektur">
          {historyValue.length > 0 && operatorValue.length > 0
            ? historyValue.slice(-1) + " " + operatorValue.slice(-1)
            : ""}
        </div>
      </div>
      <div className="absolute right-3 bottom-2 text-4xl text-white font-tektur">
        {displayValue.length < 11
          ? displayValue
          : displayValue.substring(0, 7) +
            "e" +
            (Number(displayValue) >= 1 ? "+" : "-") +
            (displayValue.length - 7)}
      </div>
      <div
        className={`absolute -top-4 -right-4 w-[292px] h-[464px] backdrop-blur-sm ${
          showHistory ? "translate-y-0" : "-translate-y-[464px]"
        }`}
      >
        <div
          ref={ref}
          className="absolute bottom-0 right-0 w-full h-72 rounded bg-slate-200"
        >
          <div className="w-full">
            {historyValue.length > 0 && operatorValue.length > 0 && (
              <div className="flex items-center justify-end w-full h-full p-6">
                {historyDisplay()}
              </div>
            )}
          </div>
          <button className="absolute bottom-3 right-3 text-3xl">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Display;
