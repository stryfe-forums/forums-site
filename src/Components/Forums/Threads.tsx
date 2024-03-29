import React, { useState, useEffect } from 'react';

import { Container, Row } from 'reactstrap';

import { ThreadList } from './Threads/ThreadList';

const Threads = () => {
  const [pinnedThreads, setPinned] = useState<ThreadList>(defaultPinned);

  const [threadList, setThreadList] = useState<ThreadList>(defaultThreads);

  useEffect(() => {
    const updateThreadlists = async () => {
      const res = await fetch(process.env.API_ENDPOINT as string, {
          method: 'GET'
        }),
        { pinned, threads } = await res.json();

      setPinned(pinned);
      setThreadList(threads);
    };
    // updateThreadlists();
  }, [pinnedThreads, threadList]);
  return (
    <>
      <Container style={{ padding: 0, maxWidth: '100%' }}>
        <Row>
          <div className='d-flex justify-content-center'>
            <ThreadList threads={pinnedThreads} pinned={true} />
          </div>
        </Row>
        <Row>
          <div className='d-flex justify-content-center'>
            <ThreadList threads={threadList} pinned={false} />
          </div>
        </Row>
      </Container>
    </>
  );
};

export { Threads };

type ThreadList = {
  title: string;
  tag: string;
  description: string;
  picture: string;
  link: string;
}[];

const defaultPinned = [
  {
    title: 'Title',
    tag: 'Author',
    description: 'Description',
    picture:
      'https://cdn.discordapp.com/avatars/517016133694521374/45cb929ebc92424fcba0a963f77cea17.webp?size=2048',
    link: '/u/yahiko'
  }
];

const defaultThreads = [
  {
    title: 'Title',
    tag: 'Author',
    description: 'Description',
    picture:
      'https://cdn.discordapp.com/avatars/517016133694521374/45cb929ebc92424fcba0a963f77cea17.webp?size=2048',
    link: '/u/yahiko'
  }
];
