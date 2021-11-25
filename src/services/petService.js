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
  };
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pet),
  });
};
const petServices = {
  getOne,
  getAll,
  create,
};
export default petServices;
