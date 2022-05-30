import React from "react";

const Filters = () => {

  const handleClick = (event) => {
    switch(event.target.value){
      case "L2H":
        
        break;
      case "H2L":
        break;
      default:
        break;
    }
  };

  return(
    <div className="filter">
      <label className="form-label">Sort according to Price</label>
      <select className="form-select-lg filter-select" aria-label="form-select-lg example">
        <option selected>None Selected</option>
        <option onClick={handleClick} value="L2H">Low to High</option>
        <option onClick={handleClick} value="H2L">High To Low</option>
      </select>
    </div>
  );
};

export default Filters;