"use client";

import { useEffect } from "react";
import { MdHistory } from "react-icons/md";
import { useAppSelector } from "@/lib/hooks";
import { setHistory, setValue } from "@/lib/slices/displaySlice";

function Display() {
  const historyValue = useAppSelector((state) => state.displayReducer.history);

  const operatorValue = useAppSelector(
    (state) => state.displayReducer.operator
  );

  const displayValue = useAppSelector((state) => state.displayReducer.value);

  return (
    <div className="relative px-3 py-2 w-full h-24 bg-gray-800 rounded">
      <div className="flex justify-between items-center text-slate-400">
        <div className="text-2xl">
          <MdHistory />
        </div>
        <div className="font-tektur">
          {historyValue.length > 0 && operatorValue.length > 0
            ? historyValue.slice(-1) + " " + operatorValue.slice(-1)
            : ""}
        </div>
      </div>
      <div className="absolute right-3 bottom-2 text-4xl text-white font-tektur">
        {displayValue}
      </div>
    </div>
  );
}

export default Display;
