import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import Footer from './Footer';
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

Enzyme.configure({ adapter: new Adapter() });

const FooterWrapper: Enzyme.ShallowWrapper = Enzyme.shallow(<Footer />);

describe('Footer Icon Component: ', () => {
  it('renders a <div> with class "footer"', () => {
    expect(FooterWrapper.type()).toEqual('div');
    expect(FooterWrapper.hasClass('footer')).toEqual(true);
  });
  it('contains two components: FooterLeft and FooterRight', () => {
    expect(FooterWrapper.find('div').at(0).find(FooterLeft)).toHaveLength(1);
    expect(FooterWrapper.find('div').at(0).find(FooterRight)).toHaveLength(1);
  });
});
