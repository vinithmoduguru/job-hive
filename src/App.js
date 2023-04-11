import "./App.css"
import Button from "./Components/Button/Button.component.tsx"
import FormInput from "./Components/form-input/form-input.component.tsx"
import Step2Form from "./Components/forms/new-step2-form.component.tsx"
import Step1Form from "./Components/forms/new-step1-form.component.tsx"
import Modal from "./Components/Modal/modal.component.tsx"
import JobItem from "./Components/job-item/job-item.component.tsx"
function App() {
  return (
    <>
      {/* <Button type="lg-primary">Next</Button> */}
      {/* <FormInput
        id="name"
        type="text"
        size="lg"
        label="Job title"
        required={true}
        placeholder={"ex. UX UI Designer"}
      />
      <Modal isOpen={true} onClose={() => {}}>
        <Step1Form />
      </Modal> */}
      <JobItem
        jobTitle="UX UI Designer"
        company="Great Vibes"
        industry="Information Technology"
        location="Chennai, Tamilnadu, India"
        jobType="Full Time"
        salary="1,00,000 - ₹ 2,00,000 a year"
        experience="3 - 5 years"
        employeeCount={100}
      />
    </>
  )
}

export default App
