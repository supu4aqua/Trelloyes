import React, { Component } from 'react';
import './App.css';
import List from './List';


// create a list of lists
/*
const store = {
     lists: [],
     allCards: {},
   }

 const lists = store.lists.map(list => {
   return <List key={list.id} header={list.header} cardIds={list.cardIds}/>
 })

function App(props) {

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
      {lists}

      </div>
    </main>
  );
}
*/
class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}
export default App;
