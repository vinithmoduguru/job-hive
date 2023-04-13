import "./App.css"
import Button from "./Components/Button/Button.component.tsx"
import FormInput from "./Components/form-input/form-input.component.tsx"
import Step2Form from "./Components/forms/new-step2-form.component.tsx"
import Step1Form from "./Components/forms/new-step1-form.component.tsx"
import Modal from "./Components/Modal/modal.component.tsx"
import JobItem from "./Components/job-item/job-item.component.tsx"
import { Routes, Route } from "react-router-dom"
import JobList from "./Components/job-list/job-list.component.tsx"
import Home from "./Components/Home/home.component.tsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/step2" element={<Step2Form />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/job-item" element={<JobItem />} />
    </Routes>
  )
}

export default App
