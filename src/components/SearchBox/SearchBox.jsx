import React from "react";

import "./search-box.styles.css"

const SearchBox = ({placeholder, handleChange}) =>
    <input 
    type="search" 
    placeholder={placeholder} name="search" 
    onChange={handleChange}
    className= "search"
    />
export default SearchBox