import { React, useEffect, useState } from 'react';
import
{ Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './dashboard.css';

function Dashboard() {
  const {
    isAuthenticated
  } = useAuth0();

  const [beginTestButton, setBeginTestButton] = useState();

  const displayButtonBegin = () => (
    <button className="beginTestButton" type="button"><Link to="/form">BEGIN TEST</Link></button>
  );

  useEffect(() => {
    if (isAuthenticated) {
      setBeginTestButton(displayButtonBegin());
    }
  }, [isAuthenticated]);
  return (
    <>
      <header>
        <h1 className="welcomeTitle">Welcome to Dream List</h1>
      </header>
      <main>
        <div className="containerIntroduction">
          <h3>Listen just the songs you want to hear, lets create your dream list</h3>
        </div>
        <div className="containerInstructions">
          <ul className="instructions">
            <li className="first-li">
              <img className="musicLogo" src="https://img.icons8.com/doodle/48/000000/apple-music--v1.png" alt="music-logo" />
              Lets see to which playlist do you listen.
            </li>
            <li>
              <img className="musicLogo" src="https://img.icons8.com/doodle/48/000000/apple-music--v1.png" alt="music-logo" />
              {' '}
              Answer the questions about what do you feel listening today
            </li>
            <li>
              <img className="musicLogo" src="https://img.icons8.com/doodle/48/000000/apple-music--v1.png" alt="music-logo" />
              {' '}
              Modify the music list based on your answers

            </li>
            <li>
              <img className="musicLogo" src="https://img.icons8.com/doodle/48/000000/apple-music--v1.png" alt="music-logo" />
              Chill and listen with your dream list
            </li>
          </ul>
          <div className="containerImg" />
          {beginTestButton}
        </div>
      </main>
    </>
  );
}

export default Dashboard;
