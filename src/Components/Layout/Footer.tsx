import React from 'react';

import { Button } from 'reactstrap';

import '../../Styles/Footer.scss';

const Footer = ({ setDark }: FooterProps) => {
  const onClick = () => setDark();

  return (
    <>
      <div className='d-flex flex-row-reverse'>
        <div className='p-2'>
          <Button
            className='float-md-right'
            color='secondary'
            id='dark-mode-switcher'
            onClick={onClick}
          >
            <span role='img' aria-label='emoji'>
              🌙
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

type FooterProps = {
  setDark: any;
};

export { Footer };
