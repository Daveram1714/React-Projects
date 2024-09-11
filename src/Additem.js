import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const Additem = ({addItem,SetAddItems,HandelSubmit}) => {
  return (
    <form 
    className=' addForm' onSubmit={HandelSubmit}>
        <labe htmlfor ='addItem'></labe>
        <input
        autoFocus  
        type='text'
        id='addItem'
        placeholder='Add Items'
        required
        value={addItem}
        onChange={(e) => SetAddItems(e.target.value)}
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