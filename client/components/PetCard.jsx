import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CreatePet from '../components/CreatePet.jsx';



const PetCard = (props) => {
  const { pets } = props;

  const deletePet = (name, e) => {
    console.log('name', name)
    Axios.delete(`http://localhost:3000/home/${name}`)
    .then(res => console.log('Pet deleted!', res))
    .then(res => location.reload())
    .catch(err => console.log(err));
  }

  if (pets.length > 0) {
    return (
      <div>
        {pets.map((pet) => {
          return (
            <article className="petCard">
              <div className="petCardContainer">
                <h3 className="petName">{pet.name}</h3>
              </div>
              <ul className="petDetailsList" style={{ listStyleType: 'none' }}>
                <li className="petDetail">Breed: {pet.breed}</li>
                <li className="petDetail">Gender: {pet.gender}</li>
                <li className="petDetail">Age: {pet.age}</li>
                <li className="petDetail">Weight: {pet.weight}</li>
              </ul>
              <div className="deletebtn">
              <button onClick={(e) => deletePet(pet.name)}>Delete</button>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
};

export default PetCard;
