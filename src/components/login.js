import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../store/actions/actions";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const users = useSelector((state) => state.allUsers.users)
  console.log(users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = users[0].id;
    const pass = users[0].pass;
    console.log(pass);
    if(event.target.username.value === username && event.target.pass.value === pass){
      dispatch(userLogin(event.target.username.value));
      navigate('/dogs');
    }
  }

  return(
    <div className="container login-form-div">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
          <input type="text" className="form-control" name="username" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
          <input type="password" className="form-control" name="pass" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;