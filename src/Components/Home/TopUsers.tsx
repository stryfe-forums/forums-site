import React from 'react';

import { Jumbotron, Button } from 'reactstrap';

const TopUsers = ({ leaderboard, loading }: TopUsersProps) => {
  if (loading) {
    return (
      <>
        <Jumbotron>
          <h1 className='display-3'>Loading...</h1>
          <p className='lead'>Loading...</p>
          <p className='lead'>
            <Button color='primary'>Loading...</Button>
          </p>
        </Jumbotron>
      </>
    );
  }
  return (
    <>
      <Jumbotron>
        <h1 className='display-3'>Hello, world!</h1>
        <p className='lead'>
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className='my-2' />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className='lead'>
          <Button color='primary'>Learn More</Button>
        </p>
      </Jumbotron>
    </>
  );
};

type TopUsersProps = {
  leaderboard?: { tag: string; picture: string; points: number }[];
  loading: boolean;
};

export { TopUsers };
