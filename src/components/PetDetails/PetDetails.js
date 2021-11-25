import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import petServices from "../../services/petService";
import petService from "../../services/petService";
const PetDetails = ({ match }) => {
  let [pet, setPet] = useState({});

  useEffect(() => {
    petService.getOne(match.params.petId).then((res) => setPet(res));
  }, []);
const onPetBtnClickHandler = ()=>{
  petServices.pet(match.params.petId).then(()=>{setPet(state=> ({...state, likes: state.likes + 1}))})
}
  return (
    <section className="detailsOtherPet">
      <h3>{pet.name}</h3>
      <p>
        Pet counter: {pet.likes}
        
          <button className="button" onClick={onPetBtnClickHandler}>
            <i className="fas fa-heart"></i>
            Pet
          </button>
       
      </p>
      <p className="img">
        <img src={pet.imageURL} />
      </p>
      <p className="description">{pet.description}</p>
      <div className="pet-info">
        <Link to={`/pets/details/${pet.id}/edit`}>
          <button className="button">Edit</button>
        </Link>
        <Link to="/pets/delete">
          <button className="button">Delete</button>
        </Link>
      </div>
    </section>
  );
};

export default PetDetails;
