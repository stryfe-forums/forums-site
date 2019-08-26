import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

const ThreadList = ({ threads, pinned }: ThreadListProps) => {
  const rows = threads.map(({ title, tag, description, picture, link }, i) => (
    <Row key={i}>
      <Button tag={Link} to={link} className='row-btn'>
        <Container>
          <Row>
            <img src={picture} className='row-img' alt='Pic' />
            <Col>{title}</Col>
            <Col>{tag}</Col>
            <Col>{description}</Col>
          </Row>
        </Container>
      </Button>
    </Row>
  ));

  return (
    <>
      <Jumbotron>
        <h1 className='display-6'>{pinned ? 'pinned' : 'threads'}</h1>
        <Container>
          <Col>{rows}</Col>
        </Container>
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
