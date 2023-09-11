// import { createContext, useState } from "react";

// export const UserContext = createContext({});

// export function UserContextProvider({ children }) {
//     const [userInfo, setUserInfo] = useState({});
//     return (
//         <UserContext.Provider value={{ userInfo, setUserInfo }}>
//             {children}
//         </UserContext.Provider>
//     );
// }

// // UserContext.js funcional 
import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [userInfo, setUserInfo] = useState({});

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}



// UserContext.js
// ../UserContext.js
// import React, { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// export function useUserContext() {
//     return useContext(UserContext);
// }

// export function UserContextProvider({ children }) {
//     const [userInfo, setUserInfo] = useState(null);

//     return (
//         <UserContext.Provider value={{ userInfo, setUserInfo }}>
//             {children}
//         </UserContext.Provider>
//     );
// }
