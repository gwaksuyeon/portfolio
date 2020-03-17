import React from 'react';
import { Route } from 'react-router-dom';
import { Settings } from 'settings';
import 'styles/root.scss';

import Landing from 'page/landing';
import Signin from 'page/signin';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Route exact path={Settings.index}  component={Landing}/>
        <Route exact={true} path={Settings.mapsin.signin} component={Signin}/>
      </div>
    )
  }
}

export default App;
