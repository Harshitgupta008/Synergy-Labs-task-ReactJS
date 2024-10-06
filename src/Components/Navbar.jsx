import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div>
                <div className="flex justify-center  py-5 mb-5 text-xl font-bold  text-customcolor shadow-md">
                    <NavLink to={"/"}  className="hover:underline ">Home</NavLink>
                </div>
                <h1 className="text-center font-bold text-2xl text-customcolor underline">User Management</h1>
            </div>
        </>
    )
}
export default Navbar;