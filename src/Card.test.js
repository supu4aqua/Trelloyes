import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Card title="Hello" content="World"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
});
