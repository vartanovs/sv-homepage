import * as Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import FooterLeft from './FooterLeft';

Enzyme.configure({ adapter: new Adapter() });

const FooterLeftWrapper: Enzyme.ShallowWrapper = Enzyme.shallow(<FooterLeft />);

describe('Footer Icon Component: ', () => {
  it('renders a <div> with class "footer__left"', () => {
    expect(FooterLeftWrapper.type()).toEqual('div');
    expect(FooterLeftWrapper.hasClass('footer__left')).toEqual(true);
  });
  it('contains a span with two icons and text indicating the page author', () => {
    expect(FooterLeftWrapper.find('i')).toHaveLength(2);
    expect(FooterLeftWrapper.text()).toEqual('Made with  and  by Serge Vartanov.');
  });
});
