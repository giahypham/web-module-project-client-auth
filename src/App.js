import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Outlet} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';


function App() {
  
  return ( 
      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link to="login">Login</Link>
          <Link to="friends">Friends List </Link>
          <Link to="friends/add">Add Friends</Link>
          <Link to="logout">Logout</Link>
        </header>
        <Routes>
          <Route path='/'
            element={<Login/>}
          />
          <Route path='/login'
            element={<Login/>}
          />
          <Route path='/friends'
            element={
              <PrivateRoute>
                <FriendsList />
              </PrivateRoute>
            }
          />
          <Route path='/friends/add'
            element={
              <PrivateRoute>
                <AddFriends/>
              </PrivateRoute>
            } 
          /> 
          <Route path='/logout'
            element={
              <PrivateRoute>
                <Logout/>
              </PrivateRoute>
            } 
          /> 
        </Routes>  
      </div>
    
  );
}

export default App;
