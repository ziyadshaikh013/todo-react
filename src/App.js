import React, { useState, useEffect } from 'react';
import './App.css';
import Todocard from './components/todocard/todocard';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Adddata from './components/adddata/adddata';
import Nav from './components/navigation/nav'
import Axios from 'axios'

const apiURL = 'https://todo-app-0013.herokuapp.com';

library.add(faTrash);

function App() {

  const [update, setUpdate] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

      const fetchTasks = async () => {
          const data = await Axios.get(`${apiURL}/api/`);
          setTasks(data.data);
          setUpdate(false);
      }
      
      fetchTasks();
      
  },[update]);

  let reverseValue = tasks.reverse();

  function handleDelete(id){
      Axios.delete(`${apiURL}/api/delete/${id}`)
          .then(()=>{
              setUpdate(true);
          })
          .catch(err=> {
              console.error(err.code);
          });
      
  }
  
  function handleAdd(){
    setUpdate(true);
  }

  return (
    <div className="App">
      <Nav />
      <div className="main-body">
        <div className="left">
          <Adddata handleAdd={handleAdd} url={apiURL}/>
        </div>
        <div className='right'>
          {
          reverseValue.map((task) => {
            return <Todocard task={task} handleDelete={handleDelete} />
          })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
