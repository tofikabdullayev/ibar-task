import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from './index';

configure({ adapter: new Adapter() });
test('renders the component', () => {
  const component = shallow(
    <Pagination pageCount={1} currentPage={1} selectPage={() => {}} />
  );
  expect(component).toMatchSnapshot();
});
