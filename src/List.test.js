import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

const cards = [{
 id: 1,
  title: 'abc',
  content: 'card-content'
},
{
 id: 2,
  title: 'def',
  content: 'card1-content'
}
]
describe('Card component', () => {
it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<List cards={cards}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {

  const tree = renderer
    .create(<List cards={cards}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
});
