import React from "react"
import JobList from "../job-list/job-list.component"
import Button from "../Button/Button.component"
import { ButtonType } from "../Button/Button.component"
import Step1Form from "../forms/new-step1-form.component"
import Step2Form from "../forms/new-step2-form.component"
import Modal from "../Modal/modal.component"

// This renders JobList component and a button that will trigger the step 1 form modal
const Home = () => {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [formData, setFormData] = React.useState({})
  const [showModal, setShowModal] = React.useState(false)

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }
  const handleClick = () => {
    setShowModal(true)
  }
  return (
    <>
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
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Step1Form
              handleNextStep={handleNextStep}
              setFormData={setFormData}
            />
          </Modal>
        ) : (
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Step2Form formData={formData} setFormData={setFormData} />
          </Modal>
        ))}
    </>
  )
}

export default Home
