import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import ToDoApp from './components/ToDoApp';
import '../src/App.css'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <ToDoApp/>
    </div>
    </Provider>
  );
}

export default App;
