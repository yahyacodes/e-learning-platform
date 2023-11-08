import React from 'react'
import { useState } from "react";
import './Form.css';

const Form = () => {
  const [count, setData] = useState({name: "", email:"",phone:"",message:""});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]:value})

  }
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(data)
  }

  return (
    <form method='POST' onSubmit={handleSubmit}>
        <h1>Contact <span>Us</span></h1>
        <input type="text" name='Name' id=' ' onChange={handleChange} value={data.name} placeholder='Enter name'  />
        <input type="email" name='Email' id=' ' onChange={handleChange} value={data.email} placeholder='Enter email' />
        <input type="phone" name='Phone' id=' ' onChange={handleChange} value={data.phone} placeholder='Enter phone' />
        <textarea name="Message" id="" cols="38" onChange={handleChange} value={data.message} rows="10" placeholder='Type here'></textarea>
        <button>Submit</button>
    </form>
  )
}

export default Form;