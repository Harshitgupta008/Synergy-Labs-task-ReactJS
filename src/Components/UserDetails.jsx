import { useEffect, useState } from "react";
import defaultdp from "../img/defaultdp.png"
import { useParams } from "react-router-dom";

const UserDetails = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const filterUser = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
                method: "GET",

            });
            if (response.ok) {
                const newdata = await response.json();
                const userId = Number(id);
                const user = newdata.find((ele) => ele.id === userId);
                return setUserData(user);

            } else {
                return alert("Error fetching users");
            }
        } catch (error) {
            return alert("Error: " + error);
        }
    };

   
    useEffect(() => {
        filterUser();
    }, [id]);
    if (!userData) {
        return <p>Loading user data...</p>;  
    }
    return (
        <>
            <div className="flex justify-center items-center mt-8">
                <div className="w-fit h-fit flex items-center flex-col gap-5">

                    <div className="bg-white md:h-44 md:w-44 h-32 w-32 rounded-full overflow-hidden">
                        <img className="h-full w-full object-cover" src={defaultdp} alt="user-dp" />
                    </div>

                    <div className="w-full max-w-xs space-y-2">
                        <div className="flex justify-between gap-5 text-sm  p-2 rounded-md">
                            <h1 className="font-medium text-blacks">Name</h1>
                            <h1 className="text-customcolor">{userData.name}</h1>
                        </div>
                        <div className="flex justify-between gap-5 text-sm  p-2 rounded-md">
                            <h1 className="font-medium text-blacks">Email</h1>
                            <h1 className="text-customcolor">{userData.email}</h1>
                        </div>
                        <div className="flex justify-between gap-5 text-sm  p-2 rounded-md">
                            <h1 className="font-medium text-blacks">Phone-Number</h1>
                            <h1 className="text-customcolor">{userData.phone}</h1>
                        </div>
                        <div className="flex justify-between gap-5 text-sm  p-2 rounded-md">
                            <h1 className="font-medium text-blacks">UserName</h1>
                            <h1 className="text-customcolor">{userData.username}</h1>
                        </div>
                        <div className="flex justify-between gap-5 text-sm  p-2 rounded-md">
                            <h1 className="font-medium text-blacks">Address</h1>
                            <h1 className="text-customcolor">
                                 {userData.address.street}, {userData.address.city}
                            </h1>
                        </div>
                        <div className="flex justify-between gap-5 text-sm  p-2 rounded-md">
                            <h1 className="font-medium text-blacks">Company-Name</h1>
                            <h1 className="text-customcolor">{userData.company.name}</h1>
                        </div>
                        <div className="flex justify-between gap-5 text-sm  p-2 rounded-md">
                            <h1 className="font-medium text-blacks">Website</h1>
                         <h1 className="text-customcolor">{userData.website}</h1>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default UserDetails;