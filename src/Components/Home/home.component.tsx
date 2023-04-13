import React from "react"
import JobList from "../job-list/job-list.component"
import Button from "../Button/Button.component"
import { ButtonType } from "../Button/Button.component"
import Step1Form from "../forms/new-step1-form.component"
import Step2Form from "../forms/new-step2-form.component"
import Modal from "../Modal/modal.component"
import { JobContext } from "../../Contexts/JobContext"
import { useState } from "react"
// This renders JobList component and a button that will trigger the step 1 form modal
const Home = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    id: "",
    jobTitle: "",
    jobType: "",
    company: "",
    location: "",
    industry: "",
    salary: [0, 0],
    experience: [0, 0],
    employeeCount: 0,
    applyType: "",
  })
  const [showModal, setShowModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }
  const handleClick = () => {
    setIsEdit(false)
    setShowModal(true)
  }
  const handleFormClose = () => {
    setShowModal(false)
    setCurrentStep(1)
  }

  return (
    <>
      <JobContext.Provider
        value={{
          formData,
          setFormData,
          showModal,
          setShowModal,
          currentStep,
          setCurrentStep,
          isEdit,
          setIsEdit,
        }}>
        <div className="bg-light flex justify-start px-4">
          <Button
            buttonType={ButtonType.LG_PRIMARY}
            rest={{ onClick: handleClick }}>
            Create a Job
          </Button>
        </div>
        <JobList />

        {showModal &&
          (currentStep === 1 ? (
            <Modal isOpen={showModal} onClose={handleFormClose}>
              <Step1Form handleNextStep={handleNextStep} />
            </Modal>
          ) : (
            <Modal isOpen={showModal} onClose={handleFormClose}>
              <Step2Form />
            </Modal>
          ))}
      </JobContext.Provider>
    </>
  )
}

export default Home
