import React from 'react'
import './App.css'

const Progress = () => {
  return (
    <form>
    <label htmlFor='name-field' >Task Name</label>
    <input type="text" id='name-field' placeholder='Task Name' />
    <label>Start Date</label>
    <input type="date" id='start-field' placeholder='Start Date' />
    <label>End Date</label>
    <input type="date" id='end-field' placeholder='End Date' />
    <div className='checkbox' >
    <label htmlFor="">Set Reminder</label>
    <input type="checkbox" name="Reminder" id="checkbox" />
    </div>
    <input type="submit" value= "Submit" />
    </form>
  )}
export default Progress