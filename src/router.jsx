import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Accout from "./pages/Accout"
import Dashboard from './pages/Dashboard'
//import Home from "./pages/Home"

//<Route path="/home" element={<Home />} />

const AppRouter = () => {
  return (
    <Router basename="/Projeto-Melodic">
      <Routes>
        <Route path="/" element={<Accout/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default AppRouter