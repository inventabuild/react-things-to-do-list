import React, { useState } from "react";
import Header from '../Components/Header'
 
export default function Contact() {
    const[nameValue, setNameValue] = React(useState);
    const[emailValue, setEmailValue] = React(useState);

    const nameField = (event) => {

    };
    const emailField = (event) => {

    };
    const contactSubmission = (event) => {
        alert("Thank you for your message" & <br>"We will reply withing 48 hours"</br>)
    };
    return(
        <>
            <Header />
            Contact Page
            <form action="#" method="GET" className="contact-form" onSubmit={contactSubmission}>
                <label>
                    Name:
                    <input type="text" name="name" className="name-field" onChange={nameField} value={nameValue} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" className="email-field" onChange={emailField} value={emailValue} />
                </label>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </>
    );
}