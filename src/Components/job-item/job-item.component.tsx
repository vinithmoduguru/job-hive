import React from "react"
import Button, { ButtonType } from "../Button/Button.component"

// Render the data from step1 and step2 form into a card container

interface JobItemProps {
  jobTitle: string
  jobType: string
  company: string
  location: string
  industry: string
  salary: string
  experience: string
  employeeCount: any
}

const JobItem = (props: JobItemProps) => {
  const {
    jobTitle,
    jobType,
    company,
    location,
    industry,
    salary,
    experience,
    employeeCount,
  } = props

  return (
    <div className="font-display flex flex-col gap-4 w-[830px] h-[320px] rounded-[10px] mt-4 ml-6 mb-4">
      <div className="flex flex-col gap-0 mb-6">
        <div className="flex flex-row">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/800px-Netflix_2015_N_logo.svg.png"
            alt="Netflix Logo"
            className="w-12 h-12 rounded-[5px] mr-2"
          />
          <div className="flex flex-col gap-0">
            <h1 className="text-2xl font-normal">{jobTitle}</h1>
            <h1 className="text-base font-normal">
              {company} - {industry}
            </h1>
            <h1 className="text-base font-normal text-light">
              {location} ({jobType})
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-base font-normal">
          Part-Time (9.00 am - 5.00 pm IST)
        </h1>
        <h1 className="text-base font-normal">Experience ({experience})</h1>
        <h1 className="text-base font-normal">INR (₹) {salary}</h1>
        <h1 className="text-base font-normal">{employeeCount} employees</h1>
      </div>
      <div className="flex flex-row gap-6">
        <Button type={ButtonType.LG_PRIMARY}>Apply Now</Button>
        <Button type={ButtonType.LG_INVERTED}>External Apply</Button>
      </div>
    </div>
  )
}

export default JobItem
