import { useEffect, useState } from "react";
import petServices from "../../services/petService";
import InputError from "../Shared/InputError/InputError";

const EditPetDetails = ({ match, history }) => { 

  const [pet, setPet] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  
  useEffect(() => {
    petServices.getOne(match.params.petId).then((res) => setPet(res));
  }, []);
  
  const onDescribtionSaveSubmit = (e) => {
    e.preventDefault();
    let petId = match.params.petId;
    let updatedPet = { ...pet, description: e.target.description.value };
    petServices.update(petId, updatedPet).then(() => {
      history.push(`/pets/details/${petId}`);
      return;
    });
  };
  
  const onDescriptionChange = (e) => {
    
    if (e.target.value.length < 10) {
      setErrorMessage("Description too short");
    } else {
      setErrorMessage("");
    }
  };
  return (
    <section class="detailsMyPet">
      <h3>{pet.name}</h3>
      <p>
        Pet counter: <i className="fas fa-heart"></i> {pet.likes}
      </p>
      <p className="img">
        <img src={pet.imageURL} />
      </p>
      <form onSubmit={onDescribtionSaveSubmit}>
        <textarea
          type="text"
          onBlur={onDescriptionChange}
          defaultValue={pet.description}
          name="description"
        ></textarea>
        <InputError>{errorMessage} </InputError>
        <button className="button"> Save</button>
      </form>
    </section>
  );
};
export default EditPetDetails;
