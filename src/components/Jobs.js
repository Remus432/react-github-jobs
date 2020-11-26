import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import store from "../store/store"
import Job from "./Job"

const Jobs = (props) => {
  console.log(props, "these are the props")
  const [jobs, setJobs] = useState([])


  useEffect(() => {
    async function fetchData() {
      const api = await fetch("https://jobs.github.com/positions.json?page=1&search=dev")
      const data = await api.json()
      setJobs(data)
      console.log(data)
    }

    fetchData()
  }, [])


  function filterJobs(item) {
    if (props.filterTitle !== "") {
      return item.title.toLowerCase().includes(props.filterTitle) || item.company.toLowerCase().includes(props.filterTitle) 
    } 

    if (props.filterLocation !== "") {
      console.log("it isn't empty")
      return item.location.toLowerCase().includes(props.filterLocation)
    }

    return item
  }

  function filterFullTime(item) {
    return props.fullTime ? item.type === "Full Time" : item
  }

  return (
    <div className="jobs">
      { jobs.filter(filterFullTime).filter(filterJobs).map(item => {
        const { company, company_logo, company_url, created_at, location, title, type, url, id } = item
        return <Job key={id} companyName={company} companyLogo={company_logo} companyUrl={company_url} time={created_at} location={location} title={title} type={type} jobUrl={url} id={id} />
      })}
    </div>
  )
}

function mapState(state = store.getState()) {
  return {
    filterLocation: state.filterLocation,
    filterTitle: state.filterTitle,
    fullTime: state.fullTime
  }
}

export default connect(mapState)(Jobs)