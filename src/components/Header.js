import React, { useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"

const Header = (props) => {
  const [ toggled, setToggle ] = useState(true)

  function toggleBtn(e) {
    setToggle(!toggled)
  }

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="header__logo">devjobs</h1>
      </Link>
      <div className="header__theme">
        <i className="fas fa-sun"></i>
        <label>
          <div className="header__theme-toggle">
            <input type="checkbox" name="toggle" onChange={toggleBtn}/>
            <div className={`circle ${toggled ? "toggled-on" : "toggled-of"}`}></div>
          </div>
        </label>
        <i className="fas fa-moon"></i>
      </div>
      {
        props.showBar && <SearchBar/>
      }
    </div>
  )
}

export default Header