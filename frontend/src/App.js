import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './views/Login'
import Signup from './views/Signup'
import MainLayout from './layout/MainLayout';
import Home from './views/Home'
import Modules from "./views/Modules"
import Module from "./views/Module"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/"
              element={<MainLayout />}>
              <Route path='home' element={<Home />} />
            </Route>
            <Route
              path="/signup"
              element={<Signup />}
            />
            <Route
              path="/"
              element={<MainLayout />}>
              <Route path='/modules' element={<Modules />} />
            </Route>
            <Route
              path="/"
              element={<MainLayout />}>
              <Route path='/module/:id' element={<Module />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;