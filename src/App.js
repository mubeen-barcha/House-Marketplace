import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import React from "react";
import Explore from './pages/Explore';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Forgotpassword from './pages/ForgotPassword';


function App() {
  return (
    <>
    <Router>
         <Routes>
           <Route path='/' element={<Explore />} />
           <Route path='/offers' element={<Offers />} />
           <Route path='/profile' element={<SignIn />} />
           <Route path='/sign-in' element={<SignIn />} />
           <Route path='/sign-up' element={<SignUp />} />
           <Route path='/forgot-password' element={<Forgotpassword />} />
         </Routes>
    <Navbar />
    </Router>
    </>
  );
}

export default App;
