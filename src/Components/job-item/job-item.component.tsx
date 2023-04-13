import Button, { ButtonType } from "../Button/Button.component"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid"
import { fetchJob, updateJob, deleteJob } from "../../api/job-hive.api"
import { JobContext } from "../../Contexts/JobContext"
import { useContext } from "react"

export interface JobItemProps {
  id: string
  jobTitle: string
  jobType: string
  company: string
  location: string
  industry: string
  salary: any
  experience: any
  employeeCount: Number
}

const JobItem = (props: JobItemProps) => {
  const {
    id,
    jobTitle,
    jobType,
    company,
    location,
    industry,
    salary,
    experience,
    employeeCount,
  } = props

  const { setShowModal, setFormData, formData, setIsEdit } =
    useContext(JobContext)

  const handleEdit = async (id: string) => {
    setIsEdit(true)
    const job = await fetchJob(id)
    console.log(job)
    setFormData(job)
    console.log(formData)
    setShowModal(true)
  }

  const handleDelete = (id: string) => {
    const res = deleteJob(id).then(() => {
      window.location.reload()
    })
    console.log(res)
  }

  return (
    <div className="bg-white font-display flex flex-col gap-4 w-[830px] h-[320px] rounded-[10px] px-6 py-4">
      <div className="flex flex-col gap-0 mb-6">
        <div className="flex flex-row">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg"
            alt="Netflix Logo"
            className="w-12 h-12 rounded-[5px] mr-2"
          />
          <div>
            <div className="flex flex-col gap-0">
              <h1 className="text-2xl font-normal">{jobTitle}</h1>
              <h1 className="text-base font-normal">
                {company} - {industry}
              </h1>
              <h1 className="text-base font-normal text-light mb-5">
                {location} ({jobType})
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-base font-normal">
                Part-Time (9.00 am - 5.00 pm IST)
              </h1>
              <h1 className="text-base font-normal">
                {`Experience (${experience[0]} - ${experience[1]}) years`}
              </h1>
              <h1 className="text-base font-normal">{`INR (₹) ${salary[0]} - ${salary[1]} / Month`}</h1>
              <h1 className="text-base font-normal">
                {`${employeeCount}`} employees
              </h1>
            </div>
            <div className="flex flex-row gap-6 mt-6">
              <Button buttonType={ButtonType.LG_PRIMARY}>Apply Now</Button>
              <Button buttonType={ButtonType.LG_INVERTED}>
                External Apply
              </Button>
            </div>
          </div>
          <div className="flex flex-row gap-6 ml-auto items-start">
            <button onClick={() => handleEdit(id)}>
              <PencilIcon className="w-6 h-6 cursor-pointer" />
            </button>
            <button onClick={() => handleDelete(id)}>
              <TrashIcon className="w-6 h-6 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobItem
