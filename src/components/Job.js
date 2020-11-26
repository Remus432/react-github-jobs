import React from "react"
import moment from "moment"
import { Link } from "react-router-dom"
import noImg from "../no-img.svg"

const Job = ({ companyName, companyLogo, companyUrl, time, location, title, type, jobUrl, id }) => {

  function getSingleJob(e) {
    
  }

  return (
    <Link to={`/job/${id}`} style={{ textDecoration: "none"}}>
      <div onClick={getSingleJob} className="jobs__item" data-job_url={jobUrl}>
        <img className="jobs__item-logo" src={companyLogo !== null ? companyLogo : noImg} alt="Company Logo"/>
        <div className="jobs__item-info">
          <span className="jobs__item-createdAt">{moment(time).from()}</span>
          <span className="jobs__item-type">{type}</span>
        </div>
        <p className="jobs__item-title">{title}</p>
        <p className="jobs__item-company">{companyName}</p>
        <p className="jobs__item-location">{location}</p>
      </div>
    </Link>
  )
}

export default Job