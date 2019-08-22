import React from 'react';

import { Jumbotron, Button } from 'reactstrap';

const ThreadList = ({ threads, pinned }: ThreadListProps) => {
  const rows = threads.map(({ title, tag, description, picture, link }, i) => (
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
        <h1  className='display-6'>{pinned ? 'pinned' : 'threads'}</h1>
        <div className='container'>
          <div className='col-sm'>{rows}</div>
        </div>
      </Jumbotron>
    </>
  );
};

type ThreadListProps = {
  threads: {
    title: string;
    tag: string;
    description: string;
    picture: string;
    link: string;
  }[];
  pinned: boolean;
};

export { ThreadList };
