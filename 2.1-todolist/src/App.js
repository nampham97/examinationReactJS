import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [listTodo, setListTodo] = useState([]);

  const [todo, setTodo] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [holdEdit, setHoldEdit] = useState({});

  const [isValid, setValid] = useState(true);

  const handleChange = (e) => setTodo(e.target.value);

  const getListChange = (obj, action) => {
    let listEdit = [];
    if(action === 'EDIT'){
      listEdit = listTodo.map((item) =>{
          
          if(item.id === obj.id){
            return {
              ...item,
              isDisable : true
            }
          }
          item.isDisable = false;
          return item;
      })
    }

    if(action === 'DISCARD' || action === 'SAVE'){
      listEdit = listTodo.map((item) =>(
        {
          ...item,
          isDisable : false
        }
      ));
    }
 
    setListTodo(listEdit);
  }

  const checkInputItem = (name) => name.trim().length === 0 ? false : true;
 
  const  handleSubmit = (e) =>{
    e.preventDefault();

    if(isEdit){
      const newListEdit = listTodo.map( (item) => {
          console.log('holdEdit.isDisable:', holdEdit);
          if(item.id === holdEdit.id){
            return {
                      ...holdEdit,
                      name: todo,
                      isDisable: false
                  }
          }
          return item;
      });

      if(checkInputItem(todo)){
        setValid(true);
        setListTodo(newListEdit);
        setIsEdit(false);
      }else{
        setValid(false);
      }


    }else{

      const newItem = {
        id: Math.random(),
        name: todo,
        isDisable : false
      }

      if(checkInputItem(todo)){
        setValid(true);
        setListTodo([...listTodo, newItem]);
      }else{
        setValid(false);
      }
      
    }
    setTodo('');
   
  }

  const handleEdit = (id) =>{
    const obj = listTodo.find(item => item.id === id);
    getListChange(obj, 'EDIT');
    setTodo(obj.name);
    setIsEdit(true);
    setHoldEdit(obj);

  }

  const handleDelete = (id) =>{
    const newList = listTodo.filter(item => item.id !== id);
    setListTodo(newList);

  }

  const handleClear = () => setListTodo([]);

  const handleDiscard = () =>{
    setIsEdit(false);
    setTodo('');
    setHoldEdit({id:'', name:''});
    const obj = listTodo.find(item => item.id === holdEdit.id);
    getListChange(obj, 'DISCARD');
  }

    //Alert here
  useEffect( () => {

  }, [isValid])

  return <section className='section-center'>
            <div className='grocery-form'>
                {!isValid && <Alert />}
                <h3 className='title'>Todo-List</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                  <input type='text' name='in' className='grocery' placeholder='e.g Learning' value={todo} onChange={(e) => handleChange(e)}/>
                  <button type='submit' className='submit-btn'>{isEdit ? 'Save' : 'Submit'}</button>
                  {isEdit ? <button type='button' onClick={handleDiscard} className='submit-btn discard-btn'>Discard</button> : ''}
                </div>
            </form>
            <article className='grocery-container'>
                {
                  listTodo.length > 0 && 
                  listTodo.map( (item) =>(
                    <List key={item.id} {...item} handleEdit={handleEdit} handleDelete={handleDelete} />
                  ))
                }
            </article>
            {
              listTodo.length > 0 &&  
              <article className='grocery-container'>
                    <button className="clear-btn" onClick={handleClear}>Clears all</button>
              </article>
            }
  </section>
}

export default App
