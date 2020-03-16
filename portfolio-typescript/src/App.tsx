import React from 'react';
import { Route } from 'react-router-dom';
// import { Settings } from 'settings';
import 'styles/root.scss';

import Landing from 'page/landing';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Route exact path="/"  component={Landing}></Route>
      </div>
    )
  }
}

export default App;
