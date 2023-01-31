import UserList from "./components/UserList"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddUser from "./components/AddUser"
import EditUser from "./components/EditUser"

const App = () => {

  return (
    <div className="max-w-xl mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
