'use client'
import { useState } from "react";

const MySearch = () =>{
    const [searchTerm,setSearchTerm] = useState('');

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setSearchTerm(event.target.value)
    }

    const handleSearch = (event:React.FormEvent) => {
        event.preventDefault();
        console.log("Search",searchTerm);
    };
   
    return(
        <form onSubmit={handleSearch} className="search-form">
            <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search..."
            className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
}

export default MySearch;