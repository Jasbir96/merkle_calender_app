import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { geoToCountry, holidayAPIurl } from '../constants';
import useGeolocation from '../hooks/useGeolocation';
import { getMonth } from '../util';
// 1
const CalenderContext = React.createContext();

export const useCalenderContext = function () {
    return useContext(CalenderContext);
}
function CalenderContextProvider({ children }) {
    // state 
    const [monthIndex, setMonthIndex] = useState(0);
    const { location, error } = useGeolocation();
    const [holidays, setHolidays] = useState(null);
    const [city, setCity] = useState(null);

    async function getHolidaysOfMonth() {
        try {
            if (!location||error) {
                return;
            }
            // const coordToCountryApiURL = `${geoToCountry}?q=${location.latitude},${location.longitude}&key=`;
            // const resp = await fetch(coordToCountryApiURL);
            // const data = await resp.json();
            // const countryCode = data.results[0].components["ISO_3166-1_alpha-2"];
            // console.log(countryCode);
        
            const countryCode = "DE";
            const year = "2024";

            const holdidayListRequest =
                `${holidayAPIurl}/${year}/${countryCode}`;

            const holidayPacket = await fetch(holdidayListRequest);
            if (holidayPacket.status == 204) {
                alert("Data for this loc is not available.check console for valid location");
                console.log("please visit https://date.nager.at/Country it contains  list of country from which we can get the list of holidays")
                return;
            }
            const data = await holidayPacket.json();
            setHolidays(data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getHolidaysOfMonth();
    }, [location,city]);
    return (
        <CalenderContext.Provider
            value={{
                monthIndex, setMonthIndex,
                holidays,setCity,
            }}>
            {children}
        </CalenderContext.Provider>
    )
}
export default CalenderContextProvider;

