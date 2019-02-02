import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import FooterIcon from './FooterIcon';
import FooterRight from './FooterRight';

Enzyme.configure({ adapter: new Adapter() });

const FooterRightWrapper: Enzyme.ShallowWrapper = Enzyme.shallow(<FooterRight />);

describe('Footer Icon Component: ', () => {
  it('renders a <div> with class "footer__right"', () => {
    expect(FooterRightWrapper.type()).toEqual('div');
    expect(FooterRightWrapper.hasClass('footer__right')).toEqual(true);
  });
  it('contains three footer icons: linkedin, github and email', () => {
    expect(FooterRightWrapper.find(FooterIcon)).toHaveLength(3);
    expect(FooterRightWrapper.find(FooterIcon).at(0).prop('type')).toEqual('github');
    expect(FooterRightWrapper.find(FooterIcon).at(1).prop('type')).toEqual('linkedin');
    expect(FooterRightWrapper.find(FooterIcon).at(2).prop('type')).toEqual('email');
  });
});
