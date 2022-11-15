import { useState } from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import FormInput from "./FormInput";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message:"",
 
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "name",
      label: "Name",
      required: true,

    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    
    {
      id: 3,
      name: "message",
      type: "text",
      placeholder: "Type Your Message",
      label: "Message",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <h1 >CONTACT US</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Link to='./userinformation'><button id='contactus1'>Submit</button></Link>       
      </form>
    </div>
  );
};

export default Contact;