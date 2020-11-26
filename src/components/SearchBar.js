import React from "react"
import { filterByTitle, filterType, filterByLocation } from "../actions/actions"
import store from "../store/store"

const SearchBar = () => {
  function searchJobs(e) {
    e.preventDefault()
    const { title, location, fullTime } = e.target.elements

    store.dispatch(filterByTitle(title.value))
    store.dispatch(filterByLocation(location.value))
    store.dispatch(filterType(fullTime.checked))
  }

  return (
    <form onSubmit={searchJobs} className="header__search">
      <div className="header__search-group">
        <i className="fas fa-search"></i>
        <input name="title" className="header__search-group-filterBy-title" type="text" placeholder="Filter by title, companies, expertise..." />
      </div>
      <div className="header__search-group">
        <i className="fas fa-map-marker-alt"></i>
        <input name="location" className="header__search-group-filterBy-location" type="text" placeholder="Filter by location..." />
      </div>
      <div className="header__search-group">
        <input name="fullTime" className="header__search-group-fulltime" type="checkbox" placeholder="Filter by title, companies, expertise" />
        <span>Full Time Only</span>
        <input type="submit" value="Search" className="header__search-group-btn btn btn-primary"/>
      </div>
    </form>
  )
}

export default SearchBar