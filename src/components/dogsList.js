import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import dogAPI from "../apis/dogAPI";
import DogComponent from "./dogComponent";
import { searchByQuery, setDogDetails } from "../store/actions/actions";
import { Navigate, useNavigate } from "react-router-dom";

const DogsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.search_input.value;
    dispatch(searchByQuery(query));
    navigate('/dogs');
  };
  
  return (
    <div>
      <div className="left">
        <form onSubmit={handleSubmit} class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
          </div>
          <input type="text" class="form-control" aria-label="Default" name="search_input" aria-describedby="inputGroup-sizing-default"/>
        </form>
        <div className="filter">
          <label className="form-label">Sort according to Price</label>
          <select className="form-select-lg filter-select" aria-label="form-select-lg example">
            <option selected>None Selected</option>
            <option value="L2H">Low to High</option>
            <option value="H2L">High To Low</option>
          </select>
        </div>
      </div>
      <div className="list-after-login">
        <div className="container-fluid"  id="list">
          <div className="row">
            <DogComponent/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DogsList;