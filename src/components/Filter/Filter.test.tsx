import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filter from './index';

configure({ adapter: new Adapter() });
test('renders the component', () => {
  const component = shallow(<Filter onFilter={() => {}} />);
  expect(component).toMatchSnapshot();
});
