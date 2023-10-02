import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route exact path='/'>
            <Login/>
          </Route>

          <Route exact path='/login'>
            <Login/>
          </Route>

          <Route exact path='/friends'>
            <FriendsList/>
          </Route>

          <Route exact path='/friends/add'>
            <AddFriends/>
          </Route>

          <Route exact path='/logout'>
            
          </Route>
        </Routes>
      </div>
    
  );
}

export default App;
