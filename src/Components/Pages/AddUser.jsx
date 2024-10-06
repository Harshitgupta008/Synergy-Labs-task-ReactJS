import { useState } from "react";

const AddUser = () => {
    const [userData, setUserData] = useState({
        name: "", email: "", number: "", username: "", address: { street: "", city: "" }, companyname: "", website: ""
    })

    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === 'street' || name === 'city') {
            setUserData({ ...userData, address: { ...userData.address, [name]: value } });
        } else {
            setUserData({ ...userData, [name]: value });
        }
    }
    const validate = () => {
        const { name, email, number, username, companyname, website, address } = userData;

        let tempErrors = {};

        if (!name) tempErrors.name = "Name is required.";
        else if (name.length < 3) tempErrors.name = "Name must be at least 3 characters long.";

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) tempErrors.email = "Email is required.";
        else if (!emailPattern.test(email)) tempErrors.email = "Invalid email format.";

        const phonePattern = /^[0-9]{10}$/;
        if (!number) tempErrors.number = "Phone number is required.";
        else if (!phonePattern.test(number)) tempErrors.number = "Invalid phone number. Must be 10 digits.";

        if (!username || username.length < 3) {
            tempErrors.username = "Username is required and  3 characters long.";
        }

        if (!address.street) tempErrors.street = "Street is required.";
        if (!address.city) tempErrors.city = "City is required.";

        if (companyname && companyname.length < 3) {
            tempErrors.companyname = "Company name must be at least 3 characters long.";
        }

        const urlPattern = /^(https?:\/\/)?([\w\d-]+\.){1,3}[a-zA-Z]{2,63}(\/[\w\d-]*)*$/;
        if (website && !urlPattern.test(website)) {
            tempErrors.website = "Invalid website URL.";
        }

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    const SubmitUser = async (e) => {
        e.preventDefault();

        if (validate()) {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userData)
                })
                if (response.ok) {
                    setUserData({
                        name: "", email: "", number: "", username: "", address: { street: "", city: "" }, companyname: "", website: ""
                    })
                    return alert("Data submitted");
                } else {
                    return alert("find error@#$%")
                }
            } catch (error) {
                return alert("error in submited from " + error)
            }
        } else {
            alert("Please fix the errors and try again.");
        }

    }
    return (
        <>
            <div className="flex items-center justify-center py-2  h-fit w-full">
                <form className="flex  flex-col h-fit w-fit gap-3">
                    <div className="flex flex-col gap-1">
                        <label className="px-1 text-customcolor" htmlFor="name">Name<span className="text-red-500">*</span></label>
                        <input type="text" id="name" name="name" value={userData.name} onChange={handleInput} className="border-2  md:w-96 sm:w-80 border-gray-400 rounded-xl w-64  px-2 py-2" />
                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="px-1 text-customcolor" htmlFor="email">Email<span className="text-red-500">*</span></label>
                        <input type="email" id="email" name="email" value={userData.email} onChange={handleInput} className="border-2  md:w-96 sm:w-80 border-gray-400 rounded-xl w-64  px-2 py-2" />
                        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="px-1 text-customcolor" htmlFor="number">Phone-Number<span className="text-red-500">*</span></label>
                        <input type="number" id="number" name="number" value={userData.number} onChange={handleInput} className="border-2  md:w-96 sm:w-80 border-gray-400 rounded-xl w-64  px-2 py-2" />
                        {errors.number && <p className="text-sm text-red-500">{errors.number}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="px-1 text-customcolor" htmlFor="username">UserName<span className="text-red-500">*</span></label>
                        <input type="text" id="username" name="username" value={userData.username} onChange={handleInput} className="border-2  md:w-96 sm:w-80 border-gray-400 rounded-xl w-64  px-2 py-2" />
                        {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="px-1 text-customcolor" htmlFor="street">Street<span className="text-red-500">*</span></label>
                        <input type="text" id="street" name="street" value={userData.address.street} onChange={handleInput} className="border-2  md:w-96 sm:w-80 border-gray-400 rounded-xl w-64  px-2 py-2" />
                        {errors.street && <p className="text-sm text-red-500">{errors.street}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="px-1 text-customcolor" htmlFor="city">City<span className="text-red-500">*</span></label>
                        <input type="text" id="city" name="city" value={userData.address.city} onChange={handleInput} className="border-2  md:w-96 sm:w-80 border-gray-400 rounded-xl w-64  px-2 py-2" />
                        {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="px-1 text-customcolor" htmlFor="companyname">Company-name(<span className="text-red-500">optional</span>)</label>
                        <input type="text" id="companyname" name="companyname" value={userData.companyname} onChange={handleInput} className="border-2  md:w-96 sm:w-80 border-gray-400 rounded-xl w-64  px-2 py-2" />
                        {errors.companyname && <p className="text-sm text-red-500">{errors.companyname}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="px-1 text-customcolor" htmlFor="website">Website(<span className="text-red-500">optional</span>)</label>
                        <input type="text" id="website" name="website" value={userData.website} onChange={handleInput} className="border-2  md:w-96 sm:w-80 border-gray-400 rounded-xl w-64  px-2 py-2" />
                        {errors.website && <p className="text-sm text-red-500">{errors.website}</p>}
                    </div>
                    <div className="flex flex-col items-center justify-center my-3">
                        <button onClick={SubmitUser} className="h-fit w-full bg-customcolor text-white font-bold py-3  rounded-full">Submit</button>
                    </div>
                </form>
            </div>

        </>
    )
}
export default AddUser;
