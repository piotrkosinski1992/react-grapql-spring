import React, {useEffect, useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../Store/actions/actions";

const Menu = (props) => {

  const dispatch = useDispatch()
  const authenticated = useSelector(state => {
    return state.app.authenticated
  })

  const [active, setActive] = useState({
    login: false,
    register: false,
    home: false
  })

  useEffect(() => {
    updateState(window.location.pathname.replace('/', ''))
  }, [])

  const handleClick = (event) => {
    updateState(event.currentTarget.id)
  }

  const updateState = (fieldName) => {
    setActive({
      login: false,
      register: false,
      home: false,
      [fieldName]: true
    })
  }

  const onLogout = () => {
    dispatch(logout())
  }


  let body = (
      <Toolbar variant="dense">
        <Link to="/home">
          <Button id="home" color="primary"
                  style={active.home ? {backgroundColor: "lightblue"} : null}
                  onClick={handleClick}>Home</Button>
        </Link>
        <Link to="/login">
          <Button name="login" id="login" color="primary"
                  style={active.login ? {backgroundColor: "lightblue"} : null}
                  onClick={handleClick}>Login</Button>
        </Link>
        <Link to="/register">
          <Button id="register"
                  style={active.register ? {backgroundColor: "lightblue"}
                      : null} color="primary"
                  onClick={handleClick}>Register</Button>
        </Link>
      </Toolbar>
  )

  if (authenticated) {
    body = (
        <Toolbar variant="dense">
          <Link to="/home">
            <Button id="home" color="primary"
                    style={active.home ? {backgroundColor: "lightblue"} : null}
                    onClick={handleClick}>Home</Button>
          </Link>
          <Link to="/home">
            <Button name="logout" id="logout" color="primary"
                    onClick={onLogout}>Logout</Button>
          </Link>
        </Toolbar>
    )
  }

  return (
      <AppBar position="static" color="transparent">
        {body}
      </AppBar>
  )
}

export default Menu;
