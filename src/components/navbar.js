import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../store/actions/actions";
import { useNavigate } from "react-router-dom";


function NavBar() {

  const users = useSelector((state) => state.allUsers.users);
  const loggedIn = users?users[0].loggedIn:false;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.name)
    switch (event.target.name) {
      case "login":
        navigate('/login');
        break;
      case "logout":
        dispatch(userLogout('akdev'));
        navigate('/login');
        break;
      case "fav":
        navigate('/favorites');
        break;
      case "home":
        navigate('/dogs');
        break;
      default:
        break;
    }  
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Petsy</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" onClick={handleClick}aria-current="page" href={loggedIn?"/dogs":"/login"} name={loggedIn?"home":"login"}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={handleClick} href={loggedIn?"/favorites":"/login"} name={loggedIn?"fav":"login"}>Favorites</a>
            </li>
            <li className="nav-item">
              {loggedIn?<a className="nav-link" onClick={handleClick} href="/login" name="logout">Logout</a>:<a className="nav-link" onClick={handleClick} href="/login" name="login">Login</a>}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
