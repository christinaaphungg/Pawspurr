import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useNavigate, Link, withRouter } from 'react-router-dom';
import Axios from 'axios';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};
const CreatePet = (props) => {
  const [name, setName] = useInput('');
  const [breed, setBreed] = useInput('');
  const [gender, setGender] = useInput('');
  const [age, setAge] = useInput(0);
  const [weight, setWeight] = useInput(0);
  const [image, setPic] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  //prevents the page from reloading when pressing discard button
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleImage = (e) => {
    setPic(e.target.files[0]);
    console.log('imgg', e.target.files[0]);
  };

  // const handleUpload = (e) => {
  //   console.log('state', image);
  //   const formData = new FormData();
  //   console.log('formData in handleUpload', formData);
  //   formData.append('image', image);
  //   Axios.post('http://localhost:3000/home/image', {
  //     image: image,
  //     data: formData,
  //   });
  //   // navigate('/');
  // };

  const addToList = () => {
    Axios.post('http://localhost:3000/home/pet', {
      name: name,
      breed: breed,
      gender: gender,
      age: age,
      weight: weight,
      // image: image,
    });
    // redirect to homepage after clicking save pet
    navigate('/');
  };

  const discard = () => {
    navigate('/');
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="card createPet">
        <h3>Enter pet details here:</h3>
        <div className="createPetField">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            placeholder="Insert name"
            value={name}
            onChange={setName}
          />
        </div>
        <div className="createPetField">
          <label htmlFor="breed">Breed:</label>
          <input
            name="breed"
            placeholder="Insert breed"
            value={breed}
            onChange={setBreed}
          />
        </div>
        <div className="createPetField">
          <label htmlFor="gender">Gender:</label>
          <input
            name="gender"
            placeholder="Insert gender"
            value={gender}
            onChange={setGender}
          />
        </div>
        <div className="createPetField">
          <label htmlFor="age">Age:</label>
          <input
            name="age"
            placeholder="Insert age"
            value={age}
            onChange={setAge}
          />
        </div>
        <div className="createPetField">
          <label htmlFor="name">Weight:</label>
          <input
            name="weight"
            placeholder="Insert weight"
            value={weight}
            onChange={setWeight}
          />
        </div>
        <div className="createPetField">
          <div className="uploadimage">
            <label htmlFor="name">Upload image:</label>
          </div>
          <input type="file" name="Pet image" onChange={handleImage} />
          <button type="button">Upload</button>
        </div>
        <div className="createPetButtonContainer">
          <button type="button" onClick={addToList}>
            Save Pet
          </button>
          <button onClick={discard}>Cancel</button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default CreatePet;
