import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NavBar } from './Layout/NavBar';
import { Footer } from './Layout/Footer';

import { Home } from '../Pages/Home';

import '../Styles/Main.scss';

const endpoint = process.env.API_ENDPOINT!;

const App = () => {
  const storedState: AppState = JSON.parse(
    localStorage.getItem('state') ||
      '{ "token": null, "id": null, "isLoggedIn": false }'
  );

  const [state, setState] = useState(storedState);

  const [darkMode, setDarkMode] = useState(
    Boolean(localStorage.getItem('dark')) || false
  );

  const setDark = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('dark', (!darkMode).toString());
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
    getState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, darkMode]);

  return (
    <>
      <Router>
        <NavBar dark={darkMode} />
        <Route exact path='/' component={Home} />
        <Footer setDark={setDark} />
      </Router>
    </>
  );
};

type AppState = {
  token: string | null;
  id: string | null;
  isLoggedIn: boolean | null;
};

export { App };
