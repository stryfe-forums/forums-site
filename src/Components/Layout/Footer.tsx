import React from 'react';

import { Button } from 'reactstrap';

const Footer = ({ setDark }: FooterProps) => {
  const onClick = () => setDark();

  return (
    <>
      <Button color='primary' onClick={onClick}>
        Dark Mode
      </Button>
    </>
  );
};

type FooterProps = {
  setDark: any;
};

export { Footer };
