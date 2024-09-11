import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const Additem = () => {
  return (
    <form 
    className=' addForm'>
        <labe htmlfor ='addItem'></labe>
        <input
        autoFocus  
        type='text'
        id='addItem'
        placeholder='Add Items'
        required
        />
        <button 
        type='submit'
        aria-label='Add Items'
        >
            <FaPlus/>
        </button>

    </form>

)
}

export default Additem