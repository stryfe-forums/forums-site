import React from 'react';

import { Button } from 'reactstrap';

import '../../Styles/Footer.scss';

const Footer = ({ setDark }: FooterProps) => {
  const onClick = () => setDark();

  return (
    <>
      <Button color='primary' id='dark-mode-switcher' onClick={onClick}>
        Dark Mode
      </Button>
    </>
  );
};

type FooterProps = {
  setDark: any;
};

export { Footer };
