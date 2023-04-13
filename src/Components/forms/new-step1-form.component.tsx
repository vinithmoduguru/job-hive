import React, { useState } from "react"
import Button, { ButtonType } from "../Button/Button.component"
import FormInput from "../form-input/form-input.component"

interface Step1FormProps {
  handleNextStep: () => void
  setFormData: (data: any) => void
  rest?: any
}

const Step1Form = (props: Step1FormProps) => {
  const { rest, handleNextStep, setFormData } = props
  const [jobTitle, setJobTitle] = useState("")
  const [company, setCompany] = useState("")
  const [industry, setIndustry] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")
  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      jobTitle,
      company,
      industry,
      location,
      jobType,
    }))
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
          size="lg"
          type="text"
          placeholder="ex. UX UI Designer"
          label="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
        <FormInput
          size="lg"
          type="text"
          placeholder="ex. Google"
          label="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <FormInput
          size="lg"
          type="text"
          placeholder="ex. Information Technology"
          label="Industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          required
        />
        <div className="flex gap-6 items-center">
          <FormInput
            size="md"
            type="text"
            placeholder="Chennai, Tamil Nadu, India"
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <FormInput
            size="md"
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
            buttonType={ButtonType.PRIMARY}
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
