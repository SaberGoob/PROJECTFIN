import React, { useState } from "react";
import "./submit.css";
import { useDispatch } from "react-redux";


const Submit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [ZipCode, setZipCode] = useState("");
  const [DropOffZip, setDropOffZip] = useState("");
  const [weight, setWeight] = useState("");
  const [material, setMaterial] = useState("");
  const [demensions, setDemensions] = useState("");
  const [CheckBox, setCheckBox] = useState("");
  const [CheckBox1, setCheckBox1] = useState("");
  const [CheckBox2, setCheckBox2] = useState("");
  const [CheckBox3, setCheckBox3] = useState("");
  const [CheckBox4, setCheckBox4] = useState("");
  const [CheckBox5, setCheckBox5] = useState("");
  const [selects, setSelects] = useState("");
  const [message, setMessage] = useState("");










  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      Submit({
        name: name,
        email: email,
        company:company,
        PhoneNumber:PhoneNumber,
        ZipCode:ZipCode,
        DropOffZip:DropOffZip,
        weight:weight,
        material:material,
        demensions:demensions,
        CheckBox:CheckBox,
        CheckBox1:CheckBox1,
        CheckBox2:CheckBox2,
        CheckBox3:CheckBox3,
        CheckBox4:CheckBox4,
        CheckBox5:CheckBox5,
        selects:selects,
        message:message,

      })
    );

    setEmail("");
    setCompany("");
  };

  return (
    <div className="login">
      
      <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
        <h1>INTERESTED IN SHIPPING WITH SUPDELIVERY?</h1>
        <h5>Use the form below to contact us for a quote.</h5>
        <div className="inputTop">
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
        label="Email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="name"
          value={company}
          placeholder="Company Name"
          onChange={(e) => setCompany(e.target.value)}
        />
         <input
          type="number"
          value={PhoneNumber}
          placeholder="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        </div>
        <div className="inputMin">
        <input
          type="number"
          value={ZipCode}
          placeholder="Pick Up Zip Code"
          onChange={(e) => setZipCode(e.target.value)}
        />
         <input
          type="number"
          value={DropOffZip}
          placeholder="Drop Off Zip Code"
          onChange={(e) => setDropOffZip(e.target.value)}
        />
          <input
          type="number"
          value={weight}
          placeholder="Weight (Kg)"
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="text"
          value={material}
          placeholder="Material"
          onChange={(e) => setMaterial(e.target.value)}
        />
        <input
          type="text"
          value={demensions}
          placeholder="Demensions"
          onChange={(e) => setDemensions(e.target.value)}
        />
        </div>
      
<h2>TRANSPORTATION (CHECK ALL THAT APPLY)</h2>
<div className="checkBox">
  <div className="checkBox1">
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
        </div>

     </div>
     <h3 className="zoneText">ZONE</h3>
     <select value={selects} onChange={e=>setSelects(e.target.value)}>
  <option value="Zone0">Z0</option>
  <option value="Zone1">Z1</option>
  <option selected value="Zone2">Z2</option>
  <option value="Zone3">Z3</option>
</select>
<input style={{padding: 30}}
          type="text"
          value={message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="submit__btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Submit;
