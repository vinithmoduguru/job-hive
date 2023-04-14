import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./Components/Home/home.component.tsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
