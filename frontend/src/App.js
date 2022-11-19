import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './views/Login'
import Signup from './views/Signup'
import Navbar from "./components/Navbar"
import Modules from "./components/Modules"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <div>
          <Routes>
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/modules"
              element={<Modules />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;