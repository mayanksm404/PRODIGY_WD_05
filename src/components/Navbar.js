import { NavLink, useNavigate } from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="w-[100%] flex justify-center items-center flex-col">
            <h1 className="pt-6 text-white text-4xl uppercase font-bold">Weather App</h1>
            <div className="lg:w-[40%] md:w-[60%] sm:w-[80%] min-[400px]:w-[100%] justify-between flex items-center pt-10 px-4">
                <NavLink to="/" className="text-white text-lg font-semibold hover:bg-opacity-30 px-2 py-1 rounded-md hover:bg-slate-50">
                    Your Weather
                </NavLink>
                <NavLink to='/search' className="text-white text-lg font-semibold hover:bg-opacity-30 px-2 py-1 rounded-md hover:bg-slate-50">
                    Search Weather
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;