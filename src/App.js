import React, { useState } from 'react';
import Joke from './Joke';
import Stories from './Stories';
import Tasks from './Tasks';
import Gallery from './Gallery';
import Matrix from './Matrix';




function App() {
  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true)

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

  const toggleShowGallery = () => {
    setShowGallery(!showGallery)
  }

  return (
    <div className="App">
      <h1>Hi Raiff</h1>
      {/* <div className='form'>
        <input value={userQuery} onChange={updateUserQuery}/>

        <button onClick={searchUserQuery}>Search</button>

      </div>

      <hr /> */}
      <div>
        {
          showGallery ? <Gallery /> : null
        }
        <button onClick={toggleShowGallery}>
          { showGallery ? 'Hide': 'Show'} Gallery
        </button>
      </div>
      <hr />
      {/* <Joke /> */}
      {/* <hr /> */}
      {/* <Stories /> */}
      {/* <Tasks /> */}
      <hr />
      <Matrix />
      {/* <Tasks /> */}
    </div>
  );
}

export default App;
