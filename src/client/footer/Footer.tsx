/**
 * @module Footer.tsx
 * @description Footer Presentation Component
 */

import * as React from 'react';

import './footer.css';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

const Footer = () => {
  return (
  <div className='footer'>
    <FooterLeft />
    <FooterRight />
  </div>
  );
};

export default Footer;
