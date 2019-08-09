import React from 'react';

import { Jumbotron, Button } from 'reactstrap';

const TrendingThreads = ({ trending, darkMode }: TrendingThreadsProps) => {
  const rows = trending.map(({ title, tag, description, picture, link }, i) => (
    <div className='row' key={i}>
      <Button href={link} className='row-btn'>
        <div className='container'>
          <div className='row'>
            <img src={picture} className='row-img' alt='Pic' />
            <div className='col-sm'>{title}</div>
            <div className='col-sm'>{tag}</div>
            <div className='col-sm'>{description}</div>
          </div>
        </div>
      </Button>
    </div>
  ));

  return (
    <>
      <Jumbotron>
        <h1 className='display-6'>trending</h1>
        <div className='container'>
          <div className='col-sm'>{rows}</div>
        </div>
      </Jumbotron>
    </>
  );
};

type TrendingThreadsProps = {
  darkMode: boolean;
  trending: {
    title: string;
    tag: string;
    description: string;
    picture: string;
    link: string;
  }[];
};

export { TrendingThreads };
