import React, { useState } from "react";
import Header from '../Components/Header'
import './Contact.css'
 
export default function Contact() {
    const[nameValue, setNameValue] = useState("");
    const[emailValue, setEmailValue] = useState("");

    const nameField = (event) => {
        setNameValue(event.target.value);
    };
    const emailField = (event) => {
        setEmailValue(event.target.value);
    };
    const contactSubmission = (event) => {
        // event.preventDefault(); // Prevents default form submission behavior
        alert("Thank you for your message\nWe will reply within 48 hours");
    };
    return(
        <>
            <body>
            <Header />
            <form action="#" method="GET" className="contact-form" onSubmit={contactSubmission}>
                <div className="page-title-div">
                    <h3>Contact Page</h3>
                </div>
                <label>
                    Name:
                    <input type="text" name="name" className="name-field" onChange={nameField} value={nameValue} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" className="email-field" onChange={emailField} value={emailValue} />
                </label>
                <div className="submit-button-div">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
            </body>
        </>
    );
}