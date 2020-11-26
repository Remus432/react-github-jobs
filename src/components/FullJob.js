import React, { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown'
import Header from "./Header"
import moment from "moment"
import gfm from "remark-gfm"

const FullJob = (props) => {
  const [job, setJob] = useState({})
  
  const jobId = props.match.params.id
  const url = `https://jobs.github.com/positions/${jobId}.json?markdown=true`

  useEffect(() => {
    async function getJobPost() {
      const res = await fetch(url)
      const data = await res.json()
      
      setJob({
        logo: data.company_logo,
        name: data.company,
        site: data.company_url,
        time: data.created_at,
        location: data.location,
        title: data.title,
        type: data.type,
        description: data.description,
        apply: data.url,
        how: data.how_to_apply
      })
    }

    getJobPost()
  }, [])

  console.log(job)
  return (
    <div>
      <Header/>
      <div className="post">
        <div className="post__company">
          <div className="post__company-logo">
            <img src={job.logo} alt="Company Logo" />
          </div>
          <div className="post__company-contact">
            <div className="post__company-info">
              <p className="post__company-name">{job.name}</p>
              <p className="post__company-site">{job.site}</p>
            </div>
            <a className="post__company-url btn btn-secondary" href={job.site} target="_blank" rel="noopener noreferrer">Company Site</a>
          </div>
        </div>
        <div className="post__description">
          <div className="post__description-info-wrapper">
            <div className="post__description-info">
              <span className="post__description-createdAt time">{moment(job.time).from()}</span>
              <span className="post__description-type type">{job.type}</span>
              <p className="post__description-title title">{job.title}</p>
              <p className="post__description-location location">{job.location}</p>
            </div>
            <a className="post__description-btn btn btn-primary" href={job.url} target="_blank" rel="noopener noreferrer">Apply Now</a>
          </div>
          <div className="post__description-text">
            <ReactMarkdown plugins={[gfm]}>
              {job.description}
            </ReactMarkdown>
          </div>
        </div>
        <div className="post__apply">
          <h2>How to Apply</h2>
          <p>{job.how}</p>
        </div>
      </div>
    </div>
  )
}

export default FullJob