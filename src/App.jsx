import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import  { useCalenderContext } from "./context/CalenderContext";
function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex}  = useCalenderContext();
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      <div className="h-screen flex flex-col ">
        <CalendarHeader />
        <div className="flex flex-1">
          <Month month={currenMonth} />
        </div>
      </div>
    </>
  );
}
export default App;
