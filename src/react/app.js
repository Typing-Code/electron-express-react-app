import React, { useState, useEffect } from 'react';

import Hello from './components/hello/hello';

const axios = require('axios');

export default function App() {

  const showMessage = (e) => {
    e.preventDefault()
    alert('You click me')
  }

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(function (response) {
        console.log(response.data);
        alert('Express status: ' + response.data.status)
      })
      .catch(function (error) {
        alert('Express status: ERROR')
      });
  }, []);

  return (
    <>
      <Hello />
      <button onClick={(e) => { showMessage(e) }}>Click me</button>
    </>
  )
}