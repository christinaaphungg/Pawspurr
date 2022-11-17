import React, { Component, useState, useEffect } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import CreatePet from '../components/CreatePet.jsx';
import PetCard from '../components/PetCard.jsx';

const Homepage = (props) => {
  const [pets, getPets] = useState('');

  //only calling this once
  useEffect(() => {
    getAllPets();
  }, []);

  const getAllPets = () => {
    Axios.get('http://localhost:3000/home')
      .then((response) => {
        // console.log('response', response)
        // console.log('response.data', response.data)
        const allPets = response.data;
        getPets(allPets);
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  return (
    <section>
      <div>
        <Link to={'/create'}>
          <button type="button" className="addpetbtn">
            {' '}
            Add new pet
          </button>
        </Link>
      </div>
      <div>
        <PetCard pets={pets} />
      </div>
    </section>
  );
};

export default Homepage;
