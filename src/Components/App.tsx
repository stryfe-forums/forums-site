import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NavBar } from './Layout/NavBar';
import { Footer } from './Layout/Footer';

import { Home } from '../Pages/Home';

import '../Styles/Main.scss';

const endpoint = process.env.API_ENDPOINT!;

export const darkModeColor = '#252526';

export const lightModeColor = '#E3E4E6';

export const navbarLight = '#F9F9FA';

const App = () => {
  if (!localStorage.state) {
    localStorage.state =
      '{ "token": null, "id": null, "tag": null, "picture": null, "isLoggedIn": false }';
  }

  const storedState: AppState = JSON.parse(localStorage.state);

  const [state, setState] = useState({ ...storedState });

  const [darkMode, setDarkMode] = useState(localStorage.dark === 'true');

  const setDark = () => {
    setDarkMode(!darkMode);
    localStorage.dark = !darkMode;
  };

  const getState = async () => {
    const { token, id } = state;

    if (!token) return;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'STRYFE-TOKEN': token
      },
      body: JSON.stringify({ token, id })
    });

    const json: AppState = await res.json();

    setState(json);
  };

  useEffect(() => {
    // getState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, darkMode]);

  return (
    <div style={{ backgroundColor: darkMode ? darkModeColor : lightModeColor }}>
      <Router>
        <NavBar
          isLoggedIn={state.isLoggedIn}
          tag={state.tag!}
          picture={state.picture!}
          darkMode={darkMode}
        />
        <Route exact path='/' component={() => <Home darkMode={darkMode} />} />
        <Footer setDark={setDark} />
      </Router>
    </div>
  );
};

type AppState = {
  token: string | null;
  id: string | null;
  tag: string | null;
  picture: string | null;
  isLoggedIn: boolean;
};

export { App };
