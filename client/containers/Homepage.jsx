// class Homepage extends Component {
//     constructor(props){
//         super(props);
//     }
//   render() {
//     return (
//       <div>
//         <Schedule />
//         <Appointments />
//         <DueDates />
//         <MedicalRecords />
//       </div>
//     );
//   }
// }

import React, { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import CreatePet from '../components/CreatePet.jsx';
import PetCard from '../components/PetCard.jsx';

const Homepage = (props) => {
  const [pets, getPets] = useState([]);
  //   const navigateToDetails = () => {
  //     useNavigate('/details');
  //   };
  //   const [clicked, addOnChange] = useState(false);

  //   const handleClick = (e) => {
  //     addOnChange(true);
  //     console.log('clicked in handleClick', clicked);
  //   };
  return (
    <div>
      {/* <button className= 'AddButton' type="button" onClick={handleClick}>
        +
      </button> */}
      <CreatePet />
      <PetCard />
      {/* {addOnChange && < CreatePet/>} */}
    </div>
  );
};

export default Homepage;
