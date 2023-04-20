import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import './App.css';
import Login from './pages/login/Login';
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  const user = true;
  return (
    <Routes>
      <Route path='/' element={user ? <Home /> : <Navigate to="/register" />}></Route>
      <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />}></Route>
      <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />}></Route>
      {user && (
        <>
          <Route path='/movies' element={<Home type="movies" />}></Route>
          <Route path='/series' element={<Home type="series" />}></Route>
          <Route path='/watch' element={<Watch />}></Route>
        </>
      )
      }
    </Routes>
  );
}

export default App;
