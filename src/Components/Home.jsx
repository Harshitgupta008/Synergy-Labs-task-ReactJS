import { NavLink, useLocation } from "react-router-dom";
import { Outlet } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
   
    return (
        <>
            <div className="navactive h-fit w-full flex justify-center items-center mt-5 p-2">
                <div className=" w-fit h-fit flex flex-wrap gap-3 p-2 justify-center items-center">
                    <NavLink to={"/allusers"} className={`h-fit w-fit  text-customcolor font-bold  px-6 py-2 rounded-full cursor-pointer ${location.pathname ==="/allusers" || location.pathname ==="/"? 'bg-customcolor text-white' : 'text-customcolor'}`}>All users</NavLink>
                    <NavLink to={"/adduser"} className={`h-fit w-fit  text-customcolor font-bold  px-6 py-2 rounded-full cursor-pointer ${location.pathname === "/adduser" ? 'bg-customcolor text-white' : 'text-customcolor'}`}>Add User</NavLink>
                </div>
            </div>
            <Outlet />

        </>
    )
}
export default Home;