import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ItemInfo from './index';

configure({ adapter: new Adapter() });
test('renders the component', () => {
  const component = shallow(
    <ItemInfo
      fields={['', '']}
      isEditMode={false}
      isUser={true}
      onCancel={() => {}}
      onSubmit={() => {}}
    />
  );
  expect(component).toMatchSnapshot();
});
