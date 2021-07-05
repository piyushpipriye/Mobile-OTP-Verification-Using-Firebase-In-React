import React, { Component } from 'react'
import { Form, Card, Image, Icon } from 'semantic-ui-react';
import firebase from './firebase'
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const handleChange = (e) => {setUserInput(e.target.value)}
  
  const handleSubmit = (e) => {
    console.log(userInput)
    console.log(typeof(userInput))
    var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha'); 
    const number = "+91"+userInput
    console.log(typeof(Number(number)))
    console.log(number)
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
      var code = prompt("code")


      if (code == null) return;


      e.confirm(code).then(function (result) {
        console.log(result.user,'user');

        document.querySelector('label').textContent += result.user.phoneNumber + "Number verified";

      }).catch((error) =>{
        console.log(error);

      });

    })
  }
    return (
      <div>
        <label></label>
  
        <div id="recaptcha"></div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
            onChange={handleChange}
              type="number"
              placeholder='Enter Number'
              name='githubuser'
            />
            <Form.Button
            onSubmit={handleSubmit}
             content='Search' />
          </Form.Group>
        </Form>
      </div>
   );
  }
  

export default App;
