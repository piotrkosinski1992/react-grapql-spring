import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import Register from "./Component/register/Register";
import Login from "./Component/login/Login";
import Home from "./Component/home/Home";
import Menu from "./Component/Menu/Menu";
import PostCardDetails from "./Component/PostCardDetails/PostCardDetails";

function App() {
  return (
      <Fragment>
        <BrowserRouter>
          <Menu/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/home' component={Home}/>
          <Route path='/post/:id' component={PostCardDetails}/>
          {/*<Redirect to='/home'/>*/}
        </BrowserRouter>
      </Fragment>
  );
}

export default App;
