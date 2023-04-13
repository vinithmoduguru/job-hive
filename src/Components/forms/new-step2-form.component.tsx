import React, { useContext, useState } from "react"
import Button, { ButtonType } from "../Button/Button.component"
import FormInput from "../form-input/form-input.component"
import { postJob, updateJob } from "../../api/job-hive.api"
import { JobContext } from "../../Contexts/JobContext"

const Step2Form = () => {
  const { isEdit, formData, setFormData, setCurrentStep, setShowModal } =
    useContext(JobContext)
  const [experience, setExperience] = useState(
    isEdit ? formData.experience : [0, 0]
  )
  const [salary, setSalary] = useState(isEdit ? formData.salary : [0, 0])
  const [employeeCount, setEmployeeCount] = useState(
    isEdit ? formData.employeeCount : 0
  )
  const [applyType, setApplyType] = useState(isEdit ? formData.applyType : "")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setShowModal(false)
    setCurrentStep(1)
    const updatedFormData = {
      ...formData,
      experience,
      salary,
      employeeCount,
      applyType,
    }
    setFormData(updatedFormData)

    try {
      console.log(updatedFormData, "Form data")
      if (isEdit) {
        const response = await updateJob(formData.id, updatedFormData)
        console.log(response, "Job updated successfully")
      } else {
        const response = await postJob(updatedFormData)
        console.log(response, "Job saved successfully")
      }
      // window.location.reload()
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
            onChange={(value) => setExperience(value)}
          />
          <FormInput
            type="range"
            size="md"
            label="Salary"
            value={salary}
            onChange={(value) => setSalary(value)}
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
            name="apply-type"
            value={applyType}
            onChange={setApplyType}
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
