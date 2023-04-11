import React, { useState } from "react"
import Button, { ButtonType } from "../Button/Button.component"
import FormInput from "../form-input/form-input.component"

const Step1Form = () => {
  const [jobTitle, setJobTitle] = useState("")
  const [company, setCompany] = useState("")
  const [industry, setIndustry] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")
  const handleClick = () => {
    console.log("clicked")
  }
  return (
    <div className="font-display flex flex-row gap-6">
      <form>
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
            placeholder="ex. Information Technology"
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
          <Button type={ButtonType.PRIMARY} rest={{ onClick: handleClick }}>
            Next
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Step1Form
