import React, { useEffect, useState } from 'react';

const endpoint = process.env.API_ENDPOINT!;

const Home = ({ trending, leaderboard }: HomeProps) => {
  const [state, setState] = useState({
    trending: [],
    leaderboard: []
  } as HomeState);

  const [loading, setLoading] = useState(true);

  const getLatest = async () => {
    const res = await fetch(endpoint, {
      method: 'GET'
    });

    const { trending, leaderboard }: HomeState = await res.json();

    setState({ trending, leaderboard });

    /*
    
    const json: HomeState = await res.json();

    setState(...json);
    */
  };

  useEffect(() => {
    getLatest();
  }, [state]);

  return (
    <>
      <div className='container' />
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
  trending: {
    title: string;
    tag: string;
    picture: string;
    description: string;
  }[];
  leaderboard: { tag: string; picture: string; points: number }[];
};

export { Home };
