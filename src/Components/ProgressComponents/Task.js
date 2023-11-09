import React from 'react'

const Task = () => {
  return (
    <div className="task-item">
    <h2>Task Name</h2>
    <h2>Start Date</h2>
    <h2>End Date</h2>
    <h2>Reminder</h2>
    <FontAwesomeIcon className='delete' icon={faXmark} color='red' size='px' />

   </div>

  )
}

export default Task