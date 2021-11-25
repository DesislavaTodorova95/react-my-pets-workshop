const url = `http://localhost:5000/pets`;

const getAll = (category = "") => {
  let petsUrl =
    url + (category && category != "all" ? `?category=${category}` : "");
  return fetch(petsUrl)
    .then((res) => res.json())

    .catch((error) => console.log(error));
};
const getOne = (petId) => {
  return fetch(`${url}/${petId}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
const create = (name, description, imageURL, category) => {
  let pet = {
    name: name,
    description,
    imageURL,
    category,
    likes: 0,
  };

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pet),
  });
};
const update = (petId, pet)=>{
 return  fetch(`${url}/${petId}`,{
    method: 'PUT',
    
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pet),
  })
}
// const pet = (petId)=>{
//   return fetch(`${url}/${petId}`, {method: 'PUT'}) 
// }
const petServices = {
  getOne,
  getAll,
  create,
  update
};
export default petServices;
