import { createContext } from "react"

export interface FormData {
  id: string
  jobTitle: string
  jobType: string
  company: string
  location: string
  industry: string
  salary: number[]
  experience: number[]
  employeeCount: string
  applyType: string
}

export interface JobContextProps {
  formData: FormData
  setFormData: (data: FormData) => void
  showModal: any
  setShowModal: any
  currentStep: number
  setCurrentStep: any
  isEdit: boolean
  setIsEdit: any
}

export const JobContext = createContext<JobContextProps>({
  formData: {
    id: "",
    jobTitle: "",
    jobType: "",
    company: "",
    location: "",
    industry: "",
    salary: [0, 0],
    experience: [0, 0],
    employeeCount: "",
    applyType: "",
  },
  setFormData: () => {},
  showModal: false,
  setShowModal: () => {},
  currentStep: 1,
  setCurrentStep: () => {},
  isEdit: false,
  setIsEdit: () => {},
})
