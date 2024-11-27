import React, { createContext, useState, useContext } from "react";


const context = createContext()

export function GlobalContext({ children }) {

    const [searchData, setSearchData] = useState('')


    const handleSearch = (e => {

        setSearchData(e.target.value)
    })


    const value = {
        handleSearch,
        setSearchData,
        searchData,
    }


    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    )


}

export const useGlobalContext = () => useContext(context)