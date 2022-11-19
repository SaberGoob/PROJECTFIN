import React, { useState } from "react";
import "./ship.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
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

  const isAuth = localStorage.getItem("token");

  return (
   

      
    <div>
       {isAuth
      ? <>
      
    <div className="ship">
 
    <div className="login__form" onSubmit={(e) => e.preventDefault()}>
        <h1>INTERESTED IN SHIPPING WITH Mongoose?</h1>
        <h5>Use the form below to contact us for a quote.
        <br/>
        <br/>
        <br/>
        <br/>
        </h5>

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
          type="text"
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
      
      <div className="option_message">
<h2>Transportation Methode option</h2>
<div className="checkBox">
     <select  onChange={(e) => setShip({...add, methode:e.target.value})}>
        <option selected value="Zone2">Car</option>
        <option>Truck</option>
        <option>Camion</option>
        <option>Bus</option>
      </select>

<input style={{padding: 30}}
          type="text"
          name="message"
          placeholder="Message"
          onChange={(e) => setShip({...add, message:e.target.value})}
        />  
</div>

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
     
      </>
      
      : <Link to="/login">
        <button className='login1' type='button'>LOGIN NOW</button>
        </Link>}
     
   </div>
  );
};

export default Add ;
