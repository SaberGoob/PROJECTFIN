import React, { useState } from "react";
import "./ship.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addShip } from '../js/userSlice/shipSlice';






const Add = () => {

  const user = useSelector ((state) => state.user?.user);
  const [add, setShip] = useState({
    company:"",
    phone:"",
    adress:"",
    message:"",
    weight:"",
    methode:"",
    demensions:"",
    material:"",
    userId:user?._id,




});


  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [company, setCompany] = useState("");
  // const [phone, setPhone] = useState("");
  // const [ZipCode, setZipCode] = useState("");
  // const [DropOffZip, setDropOffZip] = useState("");
  // const [weight, setWeight] = useState("");
  // const [material, setMaterial] = useState("");
  // const [demensions, setDemensions] = useState("");
  // const [CheckBox, setCheckBox] = useState("");
  // const [CheckBox1, setCheckBox1] = useState("");
  // const [CheckBox2, setCheckBox2] = useState("");
  // const [CheckBox3, setCheckBox3] = useState("");
  // const [CheckBox4, setCheckBox4] = useState("");
  // const [CheckBox5, setCheckBox5] = useState("");
  // const [selects, setSelects] = useState("");
  // const [message, setMessage] = useState("");

  //   dispatch(
  //     Ship({
  //       // name: name,
  //       // email: email,
  //       company:company,
  //       phone:phone,
  //       ZipCode:ZipCode,
  //       DropOffZip:DropOffZip,
  //       weight:weight,
  //       material:material,
  //       demensions:demensions,
  //       CheckBox:CheckBox,
  //       CheckBox1:CheckBox1,
  //       CheckBox2:CheckBox2,
  //       CheckBox3:CheckBox3,
  //       CheckBox4:CheckBox4,
  //       CheckBox5:CheckBox5,
  //       selects:selects,
  //       message:message,

  //     })
  //   );

  //   setEmail("");
  //   setCompany("");
  // };

  const dispatch = useDispatch();
  let navigate = useNavigate();
  return (
    <div className="ship">
      
      <div className="login__form" onSubmit={(e) => e.preventDefault()}>
        <h1>INTERESTED IN SHIPPING WITH SUPDELIVERY?</h1>
        <h5>Use the form below to contact us for a quote.</h5>

        <input
          type="name"
          name="name"
          placeholder="Company Name"
          onChange={(e) => setShip({...add, company:e.target.value})}
        />
         <input
          type="tel"
          name="name"
          placeholder="Phone Number"
          onChange={(e) => setShip({...add, phone:e.target.value})}
        />
        </div>
        <div className="inputMin">

         <input
          type="text"
          name="adress"     
         placeholder="Adress Point A to B"
          onChange={(e) => setShip({...add, adress:e.target.value})}
        />
          <input
          type="number"
          name="weight"
           placeholder="Weight (Kg)"
          onChange={(e) => setShip({...add, weight:e.target.value})}
        />
        <input
          type="text"
           name="material"
          placeholder="Material"
          onChange={(e) => setShip({...add, material:e.target.value})}
        />
        <input
          type="text"
          name="demensions"
          placeholder="Demensions"
          onChange={(e) => setShip({...add, demensions:e.target.value})}
        />
        </div>
      
<h2>TRANSPORTATION (CHECK ALL THAT APPLY)</h2>
<div className="checkBox">
  {/* <div className="checkBox1">
       <h3>Flatbed</h3>
         <input
          type="checkbox"
          value="Flatbed"
          onChange={(e) => setCheckBox(e.target.value)}
        />
        <h3>Cargo Van Loads</h3>
         <input
          type="checkbox"
          value="Cargo Van Loads"
          onChange={(e) => setCheckBox1(e.target.value)}
        /> 
         <h3>Double Deck</h3>
         <input
          type="checkbox"
          value="Double Deck"
          onChange={(e) => setCheckBox2(e.target.value)}
        />        
        </div>

        <div className="checkBox2">

         <h3>Refridgerated</h3>
         <input
          type="checkbox"
          value="Refridgerated"
          onChange={(e) => setCheckBox3(e.target.value)}
        />
        <h3> Dry Van</h3>
         <input
          type="checkbox"
          value="Dry Van"
          onChange={(e) => setCheckBox4(e.target.value)}
        />
           <h3>Stepdeck</h3>
         <input
          type="checkbox"
          value="Stepdeck"
          onChange={(e) => setCheckBox5(e.target.value)}
        />
        </div> */}

     {/* </div> */}
     <h3 className="zoneText">ZONE</h3>
     <select >
  <option value="Zone0">Z0</option>
  <option value="Zone1">Z1</option>
  <option selected value="Zone2">Z2</option>
  <option value="Zone3">Z3</option>
</select>
<input style={{padding: 30}}
          type="text"
          name="message"
          placeholder="Message"
          onChange={(e) => setShip({...add, message:e.target.value})}
        />  
        <button type="submit" className="submit__btn"
        onClick={()=> {
        dispatch(addShip(add));
        setTimeout(() => {
          navigate("/profil");
        },600);
        setTimeout(() => {
          window.location.reload()
        },600);
      }}
        >
          Submit
        </button>
      </div>
   </div>
  );
};

export default Add ;
