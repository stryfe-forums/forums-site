import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

const TopUsers = ({ leaderboard, darkMode }: TopUsersProps) => {
  const rows = leaderboard.map(({ tag, points, picture, link }, i) => (
    <Row key={i}>
      <Button tag={Link} to={link} className='row-btn'>
        <Container>
          <Row>
            <img src={picture} className='row-img' alt='Pic' />
            <Col>{tag}</Col>
            <Col className='col-sm'>{points} points</Col>
          </Row>
        </Container>
      </Button>
    </Row>
  ));

  return (
    <>
      <Jumbotron>
        <h1 className='display-6'>leaderboard</h1>
        <Container>
          <Col>{rows}</Col>
        </Container>
      </Jumbotron>
    </>
  );
};

type TopUsersProps = {
  darkMode: boolean;
  leaderboard: { tag: string; picture: string; points: number; link: string }[];
};

export { TopUsers };
