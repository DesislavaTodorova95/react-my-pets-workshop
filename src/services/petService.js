const url = `http://localhost:5000/pets`;

 const getAll = (category = "") => {
 let petsUrl =  url + ((category && category != "all") ? `?category=${category}` : "");
  return fetch(petsUrl)
    .then(res => res.json())

    .catch(error => console.log(error));
};
 const getOne = (petId) => {
  return fetch(`${url}/${petId}`)
    .then(res => res.json())
    .catch(error => console.log(error));
};
const petServices = {
  getOne,
  getAll
}
export default petServices