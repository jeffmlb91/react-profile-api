import { useState, useEffect } from 'react';
import './App.css';
import SocialCard from './SocialCard';

function App() {

  //The useState function returns an array which contains two items: item (users) and setItem (setUsers);
  //useEffect takes a function which can contain any kind of operation including side effects...any kind of side effect should be used inside useEffect
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    (async () => {
      let userData;
      try{
       const response = await fetch('https://randomuser.me/api/?results=10'); 
       userData = (await response.json()).results;
      } catch (err) {
        console.log(err);
        userData = [];
      }
      //setItem or setUser in this case will, is an updater function which will be responsible to update the item or in this case users simple as that.
      setUsers(userData);

    })()
  }, []);
  return (
    <div className="App">
      {users.map((user, index) => (
        <SocialCard userData={user} key={index}/>
      ))}
    </div>
  );
}

export default App;
