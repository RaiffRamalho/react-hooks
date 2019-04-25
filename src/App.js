import React, { useState } from 'react';
import Joke from './Joke';
import Stories from './Stories';
import Tasks from './Tasks';



function App() {
  const [userQuery, setUserQuery] = useState('');

  const updateUserQuery = event => {
    setUserQuery(event.target.value)
    console.log(userQuery)
  }

  const searchUserQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`,'_blank')
  }

  const handleKeyPres = event => {
    if(event.key ==='Enter') {
      searchUserQuery(  )
    }
  }

  return (
    <div className="App">
      <h1>Hi Raiff</h1>
      <div className='form'>
        <input value={userQuery} onChange={updateUserQuery}/>

        <button onClick={searchUserQuery}>Search</button>

      </div>

      <hr />
      {/* <Joke /> */}
      {/* <Stories /> */}
      <Tasks />
    </div>
  );
}

export default App;
