import React from 'react';
import { Route } from 'react-router-dom';
import { Settings } from 'settings';
import 'styles/root.scss';

import Landing from 'page/landing';
import Signin from 'page/signin';
import Signup from 'page/signup';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Route exact={true} path={Settings.index}  component={Landing}/>
        <Route exact={true} path={Settings.mapsin.signin} component={Signin}/>
        <Route exact={true} path={Settings.mapsin.signup} component={Signup} />
      </div>
    )
  }
}

export default App;
