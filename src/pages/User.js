
import { NavLink } from "react-router-dom";
import Spinner from "../components/Spinner";
import Weather from "../components/Weather";
import { useEffect, useState } from "react";


function User(props){
    const [data,setData]=useState([]);
    const [loading, setLoading]=useState(true);
    const longitude=props.longitude;
    const latitude=props.latitude;
    const API_KEY = "313842f7d335d845cf33d27382f3bbc2";
  async function fetchweather(){
        setLoading(true);
      try{
        const url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
        const res=await fetch(url);
        const data=await res.json();
        console.log(data);
        setData(data);
      }
      catch(err){
        console.log("error aa gya");
      }
      setLoading(false);
  }
  useEffect(()=>{
    fetchweather();
  },[]);
    return(
        <div>
            {
                data.length===null ? <NavLink to="/"></NavLink> : (loading ? <Spinner></Spinner> : <Weather data={data}/>)
            }
        </div>
    )
}

export default User;