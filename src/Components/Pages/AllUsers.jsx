import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UseAuth } from "../../AuthUser";
const AllUsers = () => {
    const { data } = UseAuth();
    const [alluser, setAllUser] = useState(data);
    const [searchInput,setSearchInput] = useState("");
    const DeleteUser = async (id) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                const newData = alluser.filter((ele, i) => {
                    return i !== id;
                })
                setAllUser(newData);
                return alert("data deleted successfully");
            } else {
                return alert("Error#$%")
            }
        } catch (error) {
            return alert("DELete Error " + error);
        }
    }
    const searchName = ()=>{
        if(!searchInput){
            return alert("fill in the search bar")
        }

        const newData = alluser.filter((ele,i)=>{
            return ele.name.toLowerCase() === searchInput.toLowerCase().trim();
        });
        
        if(newData.length > 0){
            setSearchInput("");
            return setAllUser(newData);
        }else{
            return alert("user not in list")
        }
        
    }

    useEffect(() => {

    }, [data])

    if (!alluser) {
        return <p>Loading user data...</p>;
    }

    return (
        <>
            <div className="flex justify-center items-center mt-8">
                <div className="relative w-full max-w-xs">
                    <input type="text" value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}} className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm focus:outline-none" placeholder="Search..."/>
                    <div onClick={searchName} className="absolute  inset-y-0 right-0 flex  text-customcolor items-center pr-3 hover:text-red-500">
                        <svg className="w-5 h-5 cursor-pointer " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 10.5 18 7.5 7.5 0 0 0 16.65 14.65z"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="flex md:text-lg sm:text-sm text-xs flex-col justify-center items-center h-fit w-full p-4">
                <table className="min-w-full border-collapse border border-gray-400 rounded-md shadow-xl overflow-hidden">
                    <thead className="bg-customcolor text-white">
                        <tr>
                            <th className="p-2 text-left">Name</th>
                            <th className="p-2 text-left">Email</th>
                            <th className="p-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {alluser.map((user, i) => (
                            <tr key={i} className="hover:bg-blue-200 transition-colors duration-300 cursor-pointer">
                                <td className="p-2">{user.name}</td>
                                <td className="p-2">{user.email}</td>
                                <td className="p-2 flex space-x-2">
                                    <NavLink to={`/user/${user.id}`} className="text-green-500 md:px-2 md:py-1 rounded hover:text-green-800 transition duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:size-6 sm:size-4 size-3">
                                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                                        </svg>
                                    </NavLink>
                                    <button className=" text-red-500 md:px-2 md:py-1 rounded hover:text-red-800 transition duration-200">
                                        <svg onClick={() => DeleteUser(user.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" md:size-6 sm:size-4 size-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>
                                    <NavLink to={`/userupdate/${user.id}`} className="bg-blue-500 text-white md:px-2 md:py-1 rounded hover:bg-blue-600 transition duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:size-6 sm:size-4 size-3">
                                            <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
                                        </svg>

                                    </NavLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}
export default AllUsers;