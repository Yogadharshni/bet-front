
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Ui from '../src/Email/Ui'
import Admin from '../src/Email/Admin'
import Users from '../src/Email/Users'


function App() {
  return (
    <div className="App">
 <div>
      <BrowserRouter>
        <Routes>
          <Route key={'o'} path="/" element={<Ui />} ></Route>
          <Route key={'oo'} path="/admin" element={<Admin />} ></Route>
          <Route key={'ooo'} path="/users" element={<Users />} ></Route>
        </Routes>
      </BrowserRouter>

    </div >
    </div>
  );
}

export default App;
