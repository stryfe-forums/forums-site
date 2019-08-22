import React, { useEffect, useState } from 'react';

import { TrendingThreads } from '../Components/Home/TrendingThreads';
import { TopUsers } from '../Components/Home/TopUsers';

import '../Styles/Home.scss';

// const endpoint = process.env.API_ENDPOINT!;

const Home = ({ darkMode }: HomeProps) => {
  const [state, setState] = useState<HomeState>(defaultHomeState);

  useEffect(() => {
    window.document.title = 'home | stryfe';
  }, [state]);

  return (
    <>
      <div
        className='d-flex justify-content-center'
        style={{ padding: '20px 10%' }}
      >
        <div className='col-sm' id='trending-threads'>
          <TrendingThreads trending={state.trending} darkMode={darkMode} />
        </div>

        <div className='col-sm' id='top-users'>
          <TopUsers leaderboard={state.leaderboard} darkMode={darkMode} />
        </div>
      </div>
    </>
  );
};

type HomeState = {
  trending: {
    title: string;
    tag: string;
    description: string;
    picture: string;
    link: string;
  }[];
  leaderboard: { tag: string; points: number; picture: string; link: string }[];
};

type HomeProps = {
  darkMode: boolean;
};

export { Home };

const defaultHomeState = {
  trending: [
    {
      title: 'Title',
      tag: 'Author',
      description: 'Description',
      picture:
        'https://cdn.discordapp.com/avatars/517016133694521374/45cb929ebc92424fcba0a963f77cea17.webp?size=2048',
      link: 'https://stryfe.xyz/yahiko'
    },
    {
      title: 'Title',
      tag: 'Author',
      description: 'Description',
      picture:
        'https://cdn.discordapp.com/avatars/517016133694521374/45cb929ebc92424fcba0a963f77cea17.webp?size=2048',
      link: 'https://stryfe.xyz/yahiko'
    }
  ],
  leaderboard: [
    {
      tag: 'Author',
      points: 10,
      picture:
        'https://cdn.discordapp.com/avatars/517016133694521374/45cb929ebc92424fcba0a963f77cea17.webp?size=2048',
      link: 'https://stryfe.xyz/yahiko'
    }
  ]
};

/*
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
*/
