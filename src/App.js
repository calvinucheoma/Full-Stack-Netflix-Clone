import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import {onAuthStateChanged} from "firebase/auth";
import {useAuthValue} from './AuthContext';
import ProfileScreen from './screens/ProfileScreen';

function App() {

  const {currentUser, setCurrentUser} = useAuthValue();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(userAuth) => {
      if(userAuth){
        setCurrentUser(userAuth.email);
      } else {
        setCurrentUser(null);
      }
      
    //   if (userAuth) {
    //     Logged In
    //     dispatch(login({
    //       uid: userAuth.uid,
    //       email: userAuth.email,
    //     })
    //    );
    //   }
    //   else {
    //     Logged Out
    //     dispatch(logout);
    //   }
     });
    return unsubscribe;
  }, [currentUser]);

  return (

    <div className="app">

      <Router>

        {!currentUser? (<LoginScreen/>) : (

          <Routes>

            <Route path='profile' element={<ProfileScreen/>}/>
            <Route path='/' element={<HomeScreen/>} />

          </Routes>
        )}
            
      </Router>

    </div>
      
  );
}

export default App;
