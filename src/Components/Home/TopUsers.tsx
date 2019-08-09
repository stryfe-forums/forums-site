import React from 'react';

import { Jumbotron, Button } from 'reactstrap';

const TopUsers = ({ leaderboard, darkMode }: TopUsersProps) => {
  const rows = leaderboard.map(({ tag, points, picture, link }, i) => (
    <div className='row' key={i}>
      <Button href={link} className='row-btn'>
        <div className='container'>
          <div className='row'>
            <img src={picture} className='row-img' alt='Pic' />
            <div className='col-sm'>{tag}</div>
            <div className='col-sm'>{points} points</div>
          </div>
        </div>
      </Button>
    </div>
  ));

  return (
    <>
      <Jumbotron>
        <h1 className='display-6'>leaderboard</h1>
        <div className='container'>
          <div className='col-sm'>{rows}</div>
        </div>
      </Jumbotron>
    </>
  );
};

type TopUsersProps = {
  darkMode: boolean;
  leaderboard: { tag: string; picture: string; points: number; link: string }[];
};

export { TopUsers };
