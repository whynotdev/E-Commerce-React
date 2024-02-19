import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
   <>
   <BrowserRouter>
        <Routes>
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
