import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import { useState } from "react";
import { signOut } from 'firebase/auth';
import { auth } from './config/firebaseConfig';


function App() {
  const [isAuth,setIsAuth] = useState(false)
  const signUserOut = () => {
    signOut(auth)
    localStorage.clear()
    setIsAuth(false)
    window.location.pathname= '/login'
  }
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/createpost'>Create Post</Link>
        {!isAuth ? <Link to='/login'>Login</Link> : <button onClick={signUserOut}>Log Out</button>}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
