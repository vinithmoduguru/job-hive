import React, { useState } from "react"
import Button, { ButtonType } from "../Button/Button.component"
import FormInput from "../form-input/form-input.component"

const Step2Form = () => {
  const [experience, setExperience] = useState(0)
  const [salary, setSalary] = useState(0)
  const [employeeCount, setEmployeeCount] = useState(0)
  const [applyType, setApplyType] = useState("")
  return (
    <div className="font-display flex flex-row gap-6">
      <form>
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
            <Button type={ButtonType.PRIMARY}>Save</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Step2Form
