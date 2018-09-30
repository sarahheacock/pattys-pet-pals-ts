// import * as mocha from 'mocha';
import * as React from 'react';
import * as expect from 'expect';
import { shallow } from 'enzyme';

import { App } from '../App';


describe('<MyComponent />', () => {
  it('renders one div', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('div').length).toEqual(1);
  });
});