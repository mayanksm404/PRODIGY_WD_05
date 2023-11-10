import { NavLink, Navigate } from "react-router-dom";
import location_img from '../images/location.png';
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Weather from "../components/Weather";

function Home(props) {

    const latitude = props.latitude;
    const longitude = props.longitude;
    const setLatitude = props.setLatitude;
    const setLongitude = props.setLongitude;

    function fetchlocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                }
            );
            console.log(latitude);
            console.log(longitude);
        }
    }
    useEffect(() => {
        if (latitude && longitude) {
            fetchweather();
        }
    }, [latitude, longitude])
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_KEY = "313842f7d335d845cf33d27382f3bbc2";
    async function fetchweather() {
        setLoading(true);
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setData(data);
        }
        catch (err) {
            console.log("error aa gya");
        }
        setLoading(false);
    }
    function clickHandler(){
        fetchlocation();
        if (latitude && longitude) {
            fetchweather();
        }
    }

    return (
        <div>
            {/* {
                location ? (<NavLink to="/user" longitude={longitude} latitude={latitude}></NavLink>) :
                (<div>
                <img src={location_img}/>
                <h1>Grant Location Access</h1>
                <p>Allow Access to get Weather Information</p>
                <NavLink to="/user" longitude={longitude} latitude={latitude} onClick={locationHandler}>
                    Grant Access
                </NavLink>
            </div>)
            } */}
            {
                longitude && latitude ?
                    (<div>
                        {
                            data.name ?  (loading ? <Spinner></Spinner> : <Weather data={data} />) :
                            (<Spinner></Spinner>)
                        }
                    </div>) : (
                        <div className="flex flex-col items-center justify-center">
                            <img src={location_img} height={90} width={90} className="mt-16"/>
                            <h1 className="text-white text-3xl font-semibold mt-4">Grant Location Access</h1>
                            <p className="text-white text-sm font-semibold mt-2">Allow Access to get Weather Information</p>
                            <button onClick={clickHandler} className="text-white bg-button2 px-6 rounded-md py-1 mt-6 uppercase">
                                Grant Access
                            </button>
                        </div>)
            }


        </div>
    )
}

export default Home;