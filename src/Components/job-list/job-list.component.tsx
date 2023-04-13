import React, { useState, useEffect } from "react"
import JobItem, { JobItemProps } from "../job-item/job-item.component"
import { fetchJobs } from "../../api/job-hive.api"

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<JobItemProps[]>([])

  useEffect(() => {
    const getJobs = async () => {
      try {
        const data: JobItemProps[] = await fetchJobs()
        setJobs(data)
      } catch (error) {
        console.error("Error fetching jobs:", error)
      }
    }
    getJobs()
  }, [])

  return (
    <div className="bg-light grid grid-cols-2 gap-4 items-center justify-center px-6 py-4">
      {jobs.map((job: JobItemProps, index: number) => (
        <JobItem
          key={index}
          id={job.id}
          jobTitle={job.jobTitle}
          jobType={job.jobType}
          company={job.company}
          location={job.location}
          industry={job.industry}
          salary={job.salary}
          experience={job.experience}
          employeeCount={job.employeeCount}
        />
      ))}
    </div>
  )
}

export default JobList
