import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard, Landing, Register, Error } from "./pages"
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
