import React, { useContext, useState } from "react"
import Button from "../Button/Button.component"
import FormInput from "../form-input/form-input.component"
import { JobContext } from "../../Contexts/JobContext"

interface Step1FormProps {
  handleNextStep: () => void
}

const Step1Form = (props: Step1FormProps) => {
  const { formData, isEdit, setFormData } = useContext(JobContext)
  const { handleNextStep } = props
  const [jobTitle, setJobTitle] = useState(isEdit ? formData.jobTitle : "")
  const [company, setCompany] = useState(isEdit ? formData.company : "")
  const [industry, setIndustry] = useState(isEdit ? formData.industry : "")
  const [location, setLocation] = useState(isEdit ? formData.location : "")
  const [jobType, setJobType] = useState(isEdit ? formData.jobType : "")
  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const updatedFormData = {
      ...formData,
      jobTitle,
      company,
      industry,
      location,
      jobType,
    }
    setFormData(updatedFormData)
    handleNextStep()
  }
  return (
    <div className="font-display flex flex-row gap-6">
      <form onSubmit={handleNext}>
        <div className="flex align-middle justify-between text-xl font-normal">
          <h1>Create a Job</h1>
          <h1>Step 1</h1>
        </div>
        <FormInput
          size={FormInput.Size.LARGE}
          variant={FormInput.Variant.BASE}
          type="text"
          placeholder="ex. UX UI Designer"
          label="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
        <FormInput
          size={FormInput.Size.LARGE}
          variant={FormInput.Variant.BASE}
          type="text"
          placeholder="ex. Google"
          label="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <FormInput
          size={FormInput.Size.LARGE}
          variant={FormInput.Variant.BASE}
          type="text"
          placeholder="ex. Information Technology"
          label="Industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          required
        />
        <div className="flex gap-6 items-center">
          <FormInput
            size={FormInput.Size.MEDIUM}
            variant={FormInput.Variant.BASE}
            type="text"
            placeholder="Chennai, Tamil Nadu, India"
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <FormInput
            size={FormInput.Size.MEDIUM}
            variant={FormInput.Variant.BASE}
            type="text"
            placeholder="ex. In-office"
            label="Remote Type"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            required
          />
        </div>
        <div className="absolute bottom-8 right-8">
          <Button
            variant={Button.Variant.BASE}
            size={Button.Size.SMALL}
            type="submit"
            // rest={{ ...rest, onClick: handleNextStep }}
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Step1Form
