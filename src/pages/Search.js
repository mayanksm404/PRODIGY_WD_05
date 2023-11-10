import { useState,useEffect } from "react";
import search from "../images/search.png"
import Weather from "../components/Weather";
import Spinner from "../components/Spinner";

function Search() {

    const [formData, setFormData] = useState('mumbai');
    const [loading, setLoading]=useState(true);
    const [data,setData]=useState([]);
    const [city,setCity]=useState('mumbai');
    function changeHandler(event) {
        setFormData(event.target.value);
    }
    function submitHandler(event) {
        event.preventDefault();
        setCity(formData);
        console.log(city);
    }
    const API_KEY = "313842f7d335d845cf33d27382f3bbc2";
    async function fetchweather() {
        setLoading(true);
        try {
            const cit="delhi"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
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
    useEffect(() => {
        fetchweather();
    }, [city]);
    console.log(formData);
    return (
        <div className="mt-8 relative">
            <form onSubmit={submitHandler}>
            <input type="text" placeholder="search" name="city" onChange={changeHandler} className="bg-opacity-60 bg-white text-white py-[6px] lg:w-[400px] md:w-[350px] sm:w-[250px] px-4 rounded-lg text-lg "></input>
            
            <button ><img src={search} className="mx-2 mt-1 bg-button rounded-full absolute -top-1 w-[40px] h-[40px] p-2" height={30} width={30} /></button>
            </form>
            {
                data.name ? (loading ? <Spinner></Spinner> : <Weather data={data}/> )  : (<Spinner></Spinner>)
            }
        </div>
    )
}

export default Search;