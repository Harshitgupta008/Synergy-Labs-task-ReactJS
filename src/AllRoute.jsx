import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import UserDetails from "./Components/UserDetails";
import AddUser from "./Components/Pages/AddUser";
import AllUsers from "./Components/Pages/AllUsers";
import UpdateUser from "./Components/Pages/UpdateUser";

const AllRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/" element={<AllUsers />} />
                    <Route path="/allusers" element={<AllUsers />} />
                    <Route path="/adduser" element={<AddUser />} />
                </Route>
                <Route path="/user/:id" element={<UserDetails />} />
                <Route path="/userupdate/:id" element={<UpdateUser />} />
            </Routes>
        </>
    )
}
export default AllRoute;