/**
 * @module Footer.tsx
 * @description Footer Icon Presentation Component
 */

import * as React from 'react';
import footerIconData from './footerIconData';

interface IFooterIconProps {
  type: string;
}

const FooterIcon = (props: IFooterIconProps) => {
  const { divClass, iconClass, iconLink } = footerIconData[props.type];
  return (
  <div className={divClass}>
    <a href={iconLink}><i className={iconClass} /></a>
  </div>
  );
};

export default FooterIcon;
