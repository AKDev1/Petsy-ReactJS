import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LandingPageComponent = () =>{
  const dogs = useSelector((state) => state.allDogs.dogs);
  
  function randomNumber() {
    return Math.round((Math.random() * (50000 - 10000) + 10000)/100)*100;
  }

  const renderlist = dogs?.map((dog) => {

    const imgURL = dog.image.url;
    const name = dog.name;
    const breedGrp = dog.breed_group;
    const height = dog.height.metric;
    const weight = dog.weight.metric;
    const lifeSpan = dog.life_span;
    const id = dog.id;

    return(
      <div className="col land-page-col">
        <div className="card" style={{width: 18 + 'rem'}}>
          <img src={imgURL} height="200px" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="row">
              <p className="card-text col"><b>Breed Group</b><br/>{breedGrp?breedGrp:"NA"}</p>
              <p className="card-text col"><b>Life Span</b><br/>{lifeSpan}</p>
            </div>
            <div className="row">
              <p className="card-text col"><b>Height</b><br/>{height}cm</p>
              <p className="card-text col"><b>Weight</b><br/>{weight}kg</p>
            </div>
            <div className="row">
              <p className="card-text"><b>Price</b><br/>{randomNumber()}/-</p>
              <Link to={`/login`} className="btn btn-primary col">Explore</Link>
            </div>
          </div>
        </div>
        
      </div>
    );
  });
  return <>{renderlist}</>;
}

export default LandingPageComponent;