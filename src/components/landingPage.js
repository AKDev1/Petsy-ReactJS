import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import dogAPI from "../apis/dogAPI";
import LandingPageComponent from "./landingPageComponent";
import { setDogDetails, setUserDetails } from "../store/actions/actions";

const LandingPage = () => {
  const dogs = useSelector((state) => state);
  const users = [
    {
      id: "akdev",
      pass: "ak1234",
      loggedIn: false,
      favorites: []
    }
  ];
  const dispatch = useDispatch();
  const fetchDogDetails = async () => {
    const res = await dogAPI.get();
    dispatch(setDogDetails(res.data));
  }
  
  useEffect(() => {
    fetchDogDetails();
    console.log("fetched");
    dispatch(setUserDetails(users));
    console.log("user entered");
  }, []);
  console.log("dogs", dogs);

  return (
    <div className="list-before-login">
      <div className="container-fluid"  id="list">
        <div className="row">
          <LandingPageComponent/>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;