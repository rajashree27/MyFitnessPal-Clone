import React from 'react'
import './Estyle.css'
const Cardio = () => {
  return (
    <div>
        <div className='text'>Add Exercise</div>
        <p className='text2'>Search our exercise database by name:</p>
        <div>
            <input type="text" className='sinput'/>
            <button className=''>Search</button>
        </div>
        <p className='text2'>Or, add your most recently used cardio exercises.</p>
    </div>
  )
}

export default Cardio