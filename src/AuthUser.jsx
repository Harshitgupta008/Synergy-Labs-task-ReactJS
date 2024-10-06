import { createContext, useContext, useEffect, useState } from "react";

export const AuthProvider = createContext();

export const AuthUser = ({children})=>{
    const [data, setData] = useState([]);
    const FetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                },
            })
            if (response.ok) {
                const newData = await response.json();
                return setData(newData);;
            }
        } catch (error) {
            return alert("error in get from " + error)
        }
    }
    useEffect(()=>{
        FetchData();
       
    },[data])

    return <AuthProvider.Provider value={{data}}>
        {children}
    </AuthProvider.Provider>
}

export const UseAuth = ()=>{
    return useContext(AuthProvider);
}