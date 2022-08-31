import { Routes, Route } from 'react-router-dom';
import { Navbar } from "./components";
import { Lista, Form } from "./components";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Lista />}></Route>
          <Route path='/inserir' element={<Form />}></Route>
          <Route path='/editar/:id' element={<Form />}></Route>
        </Routes>
      </div>
    </div>
  )
}