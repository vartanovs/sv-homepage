import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import FooterIcon from './FooterIcon';
import footerIconData from './footerIconData';

Enzyme.configure({ adapter: new Adapter() });

const FooterIconWrapper: Enzyme.ShallowWrapper = Enzyme.shallow(<FooterIcon type='linkedin' />);

describe('Footer Icon Component: ', () => {
  it('renders a <div> with class matching footerIconData', () => {
    expect(FooterIconWrapper.type()).toEqual('div');
    expect(FooterIconWrapper.hasClass(footerIconData.linkedin.divClass)).toEqual(true);
  });
  it('contains a link matching footerIconData', () => {
    expect(FooterIconWrapper.find('a')).toHaveLength(1);
    expect(FooterIconWrapper.find('a').at(0).props().href).toEqual(footerIconData.linkedin.iconLink);
  });
  it('contains an icon matching footerIconData', () => {
    expect(FooterIconWrapper.find('a').at(0).find('i')).toHaveLength(1);
    expect(FooterIconWrapper.find('a').at(0).find('i').hasClass(footerIconData.linkedin.iconClass)).toEqual(true);
  });
});
