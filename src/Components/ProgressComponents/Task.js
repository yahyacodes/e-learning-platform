import React from 'react'
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faXmark } from '@fortawesome/free-solid-svg-icons';
import Task from './Task'

const Task = () => {
  return (
    <div className="Task-Items">
    <h2>Task Name</h2>
    <h2>Start Date</h2>
    <h2>End Date</h2>
    <h2>Reminder</h2>
    <FontAwesomeIcon className='delete' icon={faXmark} color='red' size='px' />

   </div>

  )
}

export default Task