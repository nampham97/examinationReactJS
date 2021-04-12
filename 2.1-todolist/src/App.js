import React, { useEffect, useState } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const getListItemFromLocal = () =>{
    const list = localStorage.getItem('listTodoStore');
    if(list){
      return JSON.parse(list);
    }else{
      return [];
    }
  }

  const [listTodo, setListTodo] = useState(getListItemFromLocal);

  const [todo, setTodo] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [holdEdit, setHoldEdit] = useState({});

  const [alert, setAlert] = useState({show: false, msg: '', type: ''});

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
 
  // ======= HANDLE SUBMIT =========== 
  const  handleSubmit = (e) =>{
    e.preventDefault();
    //CASE EDIT
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
        setAlert({show: true, msg : `Editing successfuly ${holdEdit.name} to ${todo}`, type: 'success'});
        setListTodo(newListEdit);
        setIsEdit(false);
      }else{
        setAlert({show: true, msg : 'Please enter something...', type: 'danger'});
        
      }


    }
    //CASE NORMAL
    else{

      const newItem = {
        id: Math.random(),
        name: todo,
        isDisable : false
      }

      if(checkInputItem(todo)){
        setAlert({show: true, msg : `Adding successfuly ${todo}`, type: 'success'});
        setListTodo([...listTodo, newItem]);
        console.log('vao1');
      }else{
        setAlert({show: true, msg : 'Please enter something...', type: 'danger'});
        
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
    setAlert({show: true, msg : `Delete successfuly`, type: 'success'});

  }

  const handleClear = () => setListTodo([]);

  const handleDiscard = () =>{
    setIsEdit(false);
    setTodo('');
    setHoldEdit({id:'', name:''});
    const obj = listTodo.find(item => item.id === holdEdit.id);
    getListChange(obj, 'DISCARD');
    console.log('liststore:', localStorage.getItem('liststore'));
  }

  useEffect(() =>{
    localStorage.setItem('listTodoStore', JSON.stringify(listTodo));
  }, [listTodo])


  return <section className='section-center'>
            <div className='grocery-form'>
                {alert.show && <Alert {...alert} list={listTodo} stateSetAlert={setAlert}/>}
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
