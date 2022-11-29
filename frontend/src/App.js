import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './views/Login'
import Signup from './views/Signup'
import Home from './views/Home'
import Modules from "./components/Modules"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/"
              element={<Login />}
            />
            <Route
              path="/home"
              element={<Home />}
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