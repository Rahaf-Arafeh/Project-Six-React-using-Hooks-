import './styles/App.css'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Registeration from './pages/Registeration';
import LandingPage from './pages/LandingPage';
import React, { useState, createContext, useEffect } from 'react';
import Account from './components/Account';
import CinemaServices from './pages/CinemaServices';
import Cart from './components/Cart';
export const UseContext = createContext();
function App() {
  const [signUpInformation, setSignUpInformation] = useState({
    username: '',
    email: '',
    password: '',
    confPassword: '',
  })
  const [signInInformation, setSignInInformation] = useState({
    loginEmail: '',
    loginPassword: ''
  })
  const [isLogged, setIsLogged] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    setIsLogged(JSON.parse(localStorage.getItem("isLogged")));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <UseContext.Provider value={{
          signUpInformation,
          setSignUpInformation,
          isLogged,
          setIsLogged,
          isSubmitted,
          setIsSubmitted,
          signInInformation,
          setSignInInformation
        }}
        >
          <Navbar />
          <ScrollToTop />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/login' component={Registeration} />
            <Route exact path='/account' component={Account} />
            <Route exact path='/cinemaservices' component={CinemaServices} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
          <Footer />
        </UseContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
