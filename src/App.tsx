import React from 'react';
import './App.css';
import UsersListContainer from './containers/UsersListContainer';
import { NavBar } from './components/navBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import PostsListContainer from './containers/PostsListContainer';
function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<UsersListContainer />}/>
        <Route path='/users' element={<UsersListContainer />}/>
        <Route path='/posts' element={<PostsListContainer />}/>
      </Routes>
      
    </div>
  );
}

export default App;
