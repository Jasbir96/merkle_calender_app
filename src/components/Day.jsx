import dayjs from "dayjs";
import React from "react";
import { useCalenderContext } from "../context/CalenderContext";

export default function Day({ day, rowIdx }) {
  const { holidays } = useCalenderContext();
  let requiredholidayObj ;
  if (holidays) {
   requiredholidayObj = holidays.find((holidayObj) => {
      return holidayObj.date == day.format("YYYY-MM-DD");
    })
  }


  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass(day)}`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
      >
        <div className="mx-2 mt-1 bg-blue-500 text-white rounded text-center">

        {holidays&&requiredholidayObj ? requiredholidayObj.name : ""}
        </div>
      </div>
    </div>
  );
}

function getCurrentDayClass(day) {
  return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    ? "bg-blue-600 text-white rounded-full w-7"
    : "";
}