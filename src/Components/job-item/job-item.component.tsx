import Button from "../Button/Button.component"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid"
import { fetchJob, deleteJob } from "../../api/job-hive.api"
import { JobContext } from "../../Contexts/JobContext"
import { useContext } from "react"
import { CURRENCY } from "../../utils/constants"

export enum ApplyType {
  QUICK_APPLY = "quick-apply",
  EXTERNAL_APPLY = "external-apply",
}

export interface JobItemProps {
  id: string
  jobTitle: string
  jobType: string
  company: string
  location: string
  industry: string
  salary: number[]
  experience: number[]
  employeeCount: string
  applyType: ApplyType
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
    applyType,
  } = props

  const { setShowModal, setFormData, setIsEdit } = useContext(JobContext)

  const handleEdit = async (id: string) => {
    setIsEdit(true)
    const job = await fetchJob(id)
    setFormData(job)
    setShowModal(true)
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteJob(id)
    } catch (err) {
      console.log("Error deleting job ", err)
    }
  }

  const formatMoney = (salary: number[]) => {
    const [min, max] = salary
    return `${CURRENCY} ${min
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} - ${
      max ? max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "Unspecified"
    }`
  }

  return (
    <div className="bg-white font-display flex flex-col gap-4 w-auto h-[320px] rounded-[10px] px-6 py-4">
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
              <h1 className="text-base font-normal">{`${formatMoney(
                salary
              )} / Month`}</h1>
              <h1 className="text-base font-normal">
                {`${employeeCount}`} employees
              </h1>
            </div>
            <div className="flex flex-row gap-6 mt-6">
              {applyType === ApplyType.QUICK_APPLY && (
                <Button size={Button.Size.MEDIUM} variant={Button.Variant.BASE}>
                  Apply Now
                </Button>
              )}
              {applyType === ApplyType.EXTERNAL_APPLY && (
                <Button
                  size={Button.Size.LARGE}
                  variant={Button.Variant.OUTLINE}>
                  External Apply
                </Button>
              )}
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
