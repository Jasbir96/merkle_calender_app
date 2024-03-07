import { useState, useEffect } from 'react';

function useGeolocation() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    const getLocation = async () => {
        try {
            navigator.geolocation.getCurrentPosition(function (res) {
                console.log("geolocation", res.coords);
                setLocation(res.coords)
            }
            );
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        function handlePermission() {

            if (!navigator.geolocation) {
                setError('Geolocation is not supported by your browser');
                return;
            }

            navigator.permissions
                .query({ name: "geolocation" })
                .then((result) => {
                    if (result.state === "granted" || result.state == "prompt") {
                        console.log("granted");
                        getLocation();
                    } else if (result.state === "denied") {
                        alert("permission denied please provide location access");
                        setError("Denied");
                    }
                });
        }


        handlePermission();
    }, []);
    return { location, error };
}

export default useGeolocation;
