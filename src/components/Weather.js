import wind from '../images/wind.png';
import humidity from '../images/humidity.png';
import cloud from '../images/cloud.png';

function Weather({ data }) {
    // console.log(data);
    const url = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // const a=data.sys.country.toLowerCase();
    const img_url = `https://flagcdn.com/32x24/${data.sys.country.toLowerCase()}.png`;
    return (
        <div className=''>
            <div className='pt-10 w-[100%] flex flex-col justify-center items-center'>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <p className='text-3xl text-white'>{data.name}</p>
                    <img src={img_url} />
                </div>
                <div className='flex flex-col justify-center items-center mt-3'>
                <p className='text-2xl text-white'>{data.weather[0].description}</p>
                <img src={url} className='item-center' height={110} width={110}/>
                <p className='text-[3rem] font-bold text-white'>{data.main.temp}&deg;C</p>
                </div>
                <div className='flex flex-row justify-between lg:w-[55%] md:w-[70%] sm:w-[85%] mt-6 mb-5'>
                    <div className='flex flex-col items-center justify-center bg-slate-50 bg-opacity-30 px-4 py-3 rounded-lg lg:w-[200px] md:w-[180px] sm:w-[160px] mr-3'>
                        <img src={wind} height={50} width={50}/>
                        <h1 className='text-white text-xl uppercase font-semibold'>windspeed</h1>
                        <p className='text-white text-md'>{data.wind.speed}m/s</p>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-slate-50 bg-opacity-30 px-4 py-3 rounded-lg  lg:w-[200px] md:w-[180px] sm:w-[160px] mr-3'>
                        <img src={humidity} height={50} width={50}/>
                        <h1 className='text-white text-xl uppercase font-semibold'>humidity</h1>
                        <p className='text-white text-md'>{data.main.humidity}%</p>
                    </div>
                    <div className='flex flex-col items-center justify-center bg-slate-50 bg-opacity-30 px-4 py-3 rounded-lg  lg:w-[200px] md:w-[180px] sm:w-[160px] mr-3'>
                        <img src={cloud} height={50} width={50}/>
                        <h1 className='text-white text-xl uppercase font-semibold '>clouds</h1>
                        <p className='text-white text-md'>{data.clouds.all}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;