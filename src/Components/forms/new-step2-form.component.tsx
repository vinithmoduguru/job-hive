import React, { useState } from "react"
import Button, { ButtonType } from "../Button/Button.component"
import FormInput from "../form-input/form-input.component"
import { postJob } from "../../api/job-hive.api"

interface Step2FormProps {
  formData: any
  setFormData: (data: any) => void
  rest?: any
}

const Step2Form = (props: Step2FormProps) => {
  const { rest, setFormData, formData } = props
  const [experience, setExperience] = useState(0)
  const [salary, setSalary] = useState(0)
  const [employeeCount, setEmployeeCount] = useState(0)
  const [applyType, setApplyType] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      experience,
      salary,
      employeeCount,
      applyType,
    }))

    handleSave()
  }

  const handleSave = async () => {
    try {
      console.log(formData, "Form data")
      const response = await postJob(formData)
      console.log(response, "Job saved successfully")
    } catch (error) {
      console.log(error, "Error saving job")
    }
  }

  return (
    <div className="font-display flex flex-row gap-6">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="flex align-middle justify-between text-xl font-normal">
            <h1>Create a Job</h1>
            <h1>Step 2</h1>
          </div>
          <FormInput
            type="range"
            size="md"
            label="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          <FormInput
            type="range"
            size="md"
            label="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <FormInput
            size="lg"
            type="number"
            placeholder="ex. 100"
            label="Total employee"
            value={employeeCount}
            onChange={(e) => setEmployeeCount(e.target.value)}
          />
          <FormInput
            type="radio"
            label="Apply Type"
            value={applyType}
            onChange={(e) => setApplyType(e.target.value)}
            options={[
              { label: "Quick Apply", value: "quick-apply" },
              { label: "External Apply", value: "external-apply" },
            ]}
          />

          <div className="absolute bottom-8 right-8">
            <Button type="submit" buttonType={ButtonType.PRIMARY}>
              Save
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Step2Form
