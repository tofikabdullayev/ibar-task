import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import User from './index';

configure({ adapter: new Adapter() });
test('renders the component', () => {
  const component = shallow(<User first_name="" last_name="" id="" />);
  expect(component).toMatchSnapshot();
});
