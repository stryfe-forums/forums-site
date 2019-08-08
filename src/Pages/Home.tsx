import React, { useEffect, useState } from 'react';

import { TrendingThreads } from '../Components/Home/TrendingThreads';
import { TopUsers } from '../Components/Home/TopUsers';

import '../Styles/Home.scss';

const endpoint = process.env.API_ENDPOINT!;

const Home = ({ darkMode }: HomeProps) => {
  const [state, setState] = useState({
    trending: [],
    leaderboard: []
  } as HomeState);

  const [loading, setLoading] = useState(true);

  const [isLoggedIn, setLoggedIn] = useState(false);

  const [token, setToken] = useState(localStorage.token);

  const getLatest = async () => {
    const res = await fetch(endpoint, {
      method: 'GET'
    });

    const { trending, leaderboard }: HomeState = await res.json();

    setState({ trending, leaderboard });
  };

  const verifyJWT = async () => {
    if (!token) return;
    const res = await fetch(endpoint, {
      method: 'GET',
      headers: { Authorization: token }
    });

    const json = await res.json();
  };

  useEffect(() => {
    // getLatest();
    // verifyJWT();
  }, [state, token, loading]);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm' id='trending-threads'>
            <TrendingThreads loading={loading} />
          </div>

          <div className='col-sm' id='top-users'>
            <TopUsers loading={loading} />
          </div>
        </div>
      </div>
    </>
  );
};

type HomeState = {
  trending: {
    title: string;
    tag: string;
    picture: string;
    description: string;
  }[];
  leaderboard: { tag: string; picture: string; points: number }[];
};

type HomeProps = {
  darkMode: boolean;
};

export { Home };
