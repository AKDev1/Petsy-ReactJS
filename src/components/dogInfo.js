import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addFavorite } from "../store/actions/actions";


const DogInfo = () => {
  const { dogId } = useParams();
  console.log(dogId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dogs = useSelector((state) => state.allDogs.dogs);
  const dog = dogs.filter(dog => dog.id==dogId);
  console.log(dog);

  const imgURL = dog[0].image.url;
  const name = dog[0].name;
  const breedGrp = dog[0].breed_group;
  const height = dog[0].height.metric;
  const weight = dog[0].weight.metric;
  const lifeSpan = dog[0].life_span;
  const bredFor = dog[0].bred_for;
  const temperament = dog[0].temperament;

  function randomNumber() {
    return Math.round((Math.random() * (50000 - 10000) + 10000)/100)*100;
  }

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(addFavorite(dog[0].id));
    navigate('/favorites');
  }

  return(
    <div className="container-fluid cont">
      <div className="dog-info-card">
        <div class="card">
          <img class="card-img-top" height="600px" src={imgURL} alt="Card image cap"/>
          <div class="card-body">
            <h3 class="card-title">{name}</h3>
            <div className="row">
              <p className="card-text col"><b>Breed Group</b><br/>{breedGrp?breedGrp:"NA"}</p>
              <p className="card-text col"><b>Bred for</b><br/>{bredFor}</p>
              <p className="card-text col"><b>Life Span</b><br/>{lifeSpan}</p>
            </div>
            <div className="row">
              <p className="card-text col"><b>Height</b><br/>{height}cm</p>
              <p className="card-text col"><b>Weight</b><br/>{weight}kg</p>
              <p className="card-text col"><b>Temparament</b><br/>{temperament}</p>
            </div><br/>
            <div className="row">
              <h4 className="card-text col"><b>Price</b><br/>{randomNumber()}/-</h4>
              <div className="col"><Link onClick={handleClick} to={`/favorites`} className="btn btn-primary">Add to Favorites!</Link></div>
              <div className="col"><Link to={`/enquire`} className="btn btn-primary ">Enquire</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default DogInfo;