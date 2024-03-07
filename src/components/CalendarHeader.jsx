import dayjs from "dayjs";
import { useCalenderContext } from "../context/CalenderContext";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useState } from 'react'
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex, setCity } = useCalenderContext();
  const [value, setValue] = useState("Belgium");
  const updateCheckCity = (e) => {
    if (e.code == "Enter") {

        setCity(value);
    }
  }
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex item-center justify-between mx-3">

      <div className="wrapper">
        <button onClick={handlePrevMonth}
          className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-l-md">
          <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
        </button>
        <button onClick={handleNextMonth}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r-md border-l-blue-800 border-l"
        >
          <ChevronRightIcon></ChevronRightIcon>
        </button>
        <button
          onClick={handleReset}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Today
        </button>
      </div>

      <div className="wrapper flex mx-4 items-center">
        <h3 className=" text-xl text-gray-500 ">
          <LocationOnIcon></LocationOnIcon>
          <input placeholder="Delhi"
            value={value}
            className="w-1/2" onChange={(e) => { setValue(e.target.value) }}
            onKeyDown={updateCheckCity}
          ></input>
        </h3>
        <h2 className="ml-4 text-xl text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY"
          )}
        </h2>
      </div>
      <div className="wrapper">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-md"
        >
          Month
        </button>

      </div>

    </header>
  );
}
