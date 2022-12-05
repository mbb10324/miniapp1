import '../App.css'
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from 'react';

function Header () {
const [search, setSearch] = useState([])
const navigate = useNavigate()

function toSearchPage() {
    if (search) {
        navigate(`/${search}`)
    } else {
        navigate('/')
    }
}
return (
    <div>
          <Link to= '/'>
        <h1>MOVIES</h1>
        </Link>
        <br></br>
        <div className='search-box'>
            <input className="search-field" type="text" id="launchSearch" placeholder="Search..." title="Search" onChange= {(e)=>{setSearch(e.target.value)}}/>
            <button className="searchButton" type="button" onClick={()=> {toSearchPage()}} id="buttonToSearch">hello</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
    </div>
)
}

export default Header;