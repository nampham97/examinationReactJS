import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({id, name,isDisable, handleEdit, handleDelete, disable}) => {
  return <div className='grocery-item'>
            <p className='title'>{name}</p>
            <div className='form-control'>
              <button className='edit-btn' onClick={() => handleEdit(id)} disabled={isDisable}><FaEdit /></button>
              <button className='delete-btn' onClick={() => handleDelete(id)}><FaTrash /></button>
            </div>

          </div>

}

export default List
