/**
 * @module FooterRight.tsx
 * @description Footer Right Presentation Component
 */

import * as React from 'react';

import FooterIcon from './FooterIcon';

const FooterRight = () => {
  return (
    <div className='footer__right'>
      <FooterIcon type='github' />
      <FooterIcon type='linkedin' />
      <FooterIcon type='email' />
    </div>
  );
};

export default FooterRight;
