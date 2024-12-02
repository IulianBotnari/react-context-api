import Style from './AppSearch.module.css'
import { useContext, useState } from 'react'

import AppPost from '../AppPost/AppPost'
// import React from 'react'
import { useGlobalContext } from '../../Context/GlobalContext'


export default function AppSearch() {

    // const [searchData, setSearchData] = useState('')


    // const handleSearch = (e) => {
    //     setSearchData(e.target.value)
    // }
    const {
        handleSearch,
        searchData,
    } = useGlobalContext()




    return (
        <>

            <input type="search" className={`form-control ${Style.input}`} placeholder='Search...' value={searchData} onChange={(e) => handleSearch(e)} />
        </>

    )

}