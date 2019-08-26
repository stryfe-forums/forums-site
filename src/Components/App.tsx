import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Route
  // Redirect,
  // withRouter
} from 'react-router-dom';

import { NavBar } from './Layout/NavBar';
import { Footer } from './Layout/Footer';

import { Home } from '../Pages/Home';
import { Forums } from '../Pages/Forums';

import { Callback } from './Callback';

import '../Styles/Main.scss';

const endpoint = process.env.API_ENDPOINT!;

export const darkModeColor = '#252526';

export const lightModeColor = '#fbf9ef';

export const navbarLight = '#F9F9FA';

const defaultState = JSON.stringify({
  token: null,
  id: null,
  tag: null,
  picture: null,
  isLoggedIn: false
} as AppState);

const App = () => {
  if (!localStorage.state) {
    localStorage.state = defaultState;
  }

  const storedState: AppState = JSON.parse(localStorage.state);

  const [state, changeState] = useState({ ...storedState });

  const setState = (s: AppState) => {
    changeState(s);
    localStorage.state = JSON.stringify(s);
  };

  const [darkMode, setDarkMode] = useState(localStorage.dark === 'true');

  const setDark = () => {
    setDarkMode(!darkMode);
    localStorage.dark = !darkMode;
  };

  useEffect(() => {}, [state, darkMode]);

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
        <Route
          exact
          path='/forums/:thread?'
          component={() => <Forums darkMode={darkMode} />}
        />
        <Route
          exact
          path='/callback'
          component={() => <Callback setState={setState} />}
        />
        {/* <Route component={() => <Redirect to='/' />} /> */}
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

/*
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
*/
