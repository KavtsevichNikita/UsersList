import React, {useState} from 'react'
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList'
import './index.css';
function App() {

  const [usersList, setUsersList] = useState([])

  const addUserHandler = (userName, userAge) => {
    setUsersList(prev => {
      return [...prev, 
        {name: userName, age: userAge, id: Math.random().toString()}]
    });
  }
  
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
