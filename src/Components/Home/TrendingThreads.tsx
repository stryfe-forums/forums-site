import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

const TrendingThreads = ({ trending, darkMode }: TrendingThreadsProps) => {
  const rows = trending.map(({ title, tag, description, picture, link }, i) => (
    <Row key={i}>
      <Button tag={Link} to={link} className='row-btn'>
        <Container>
          <Row>
            <img src={picture} className='row-img' alt='Pic' />
            <Col>{title}</Col>
            <Col className='col-sm'>{tag}</Col>
            <Col className='col-sm'>{description}</Col>
          </Row>
        </Container>
      </Button>
    </Row>
  ));

  return (
    <>
      <Jumbotron>
        <h1 className='display-6'>trending</h1>
        <Container>
          <Col>{rows}</Col>
        </Container>
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
