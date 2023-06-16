import './App.css'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {

  return (
    <div>
      {/* <Login></Login> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
