import React, { useState } from 'react';
import CreatePet from '../components/CreatePet.jsx';

// // helper functions
// const srcIsExternal = src => src.slice(0, 4) === 'http';
// const srcIsMailto = src => src.slice(0, 6) === 'mailto';
// // if img is src locally (not hosted online),
// // src will be the required in image file
// // otherwise, just src will be the url
// const getImgSrc = src => (srcIsExternal(src) || srcIsMailto(src)
//   ? src
//   : require(`../assets/${src}`).default);

const PetCard = (info) => {
    const{
        name, breed, gender, age, weight, photo
    } = info;

  return (
    <article className="card petCard">
      <div>
        <h3 className="petName">{name}</h3>
      </div>
      <ul className="petDetailsList" style={{listStyleType: "none"}}>
        <li className="petDetail">Breed: {breed} </li>
        <li className="petDetail">Gender: {gender}</li>
        <li className="petDetail">Age: {age}</li>
        <li className="petDetail">Weight: {weight}</li>
      </ul>
    </article>
  );
};

export default PetCard;
