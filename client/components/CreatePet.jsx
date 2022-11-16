import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link, withRouter} from 'react-router-dom';

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
  const [image, setPic] = useState('');
  const [showForm, setShowForm] = useState(false);

  //prevents the page from reloading when pressing discard button
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleImage = (e) => {
    console.log(e.target.files);
    setPic(e.target.files[0]);
  };

  const savePet = () => {
    const body = {
      name,
      breed,
      gender,
      age,
      weight,
      image,
    };
    fetch('/pet', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        props.history.push('');
      })
      .catch((err) => console.log('CreatePet fetch /create: ERROR: ', err));
  };
  return (
    <React.Fragment>
      {showForm ? (
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
            <label htmlFor="name">Upload image:</label>
            <input type="file" name="Pet image" onChange={handleImage} />
            <button>Submit</button>
          </div>
          <div className="createPetButtonContainer">
            <button type="submit" onClick={savePet}>Save Pet</button>
            <button onClick={() => setShowForm(false)}>Discard</button>
          </div>
        </form>
      ) : (
        <button className="mainbtn" onClick={() => setShowForm(true)}>Add new pet</button>
      )}
    </React.Fragment>
  );
};

export default CreatePet;
