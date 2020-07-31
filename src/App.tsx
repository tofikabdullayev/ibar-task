import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Users from './pages/Users';
import User from './pages/User';
import Posts from './pages/Posts';
import Post from './pages/Post';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Users}></Route>
        <Route path="/user/:userId" exact component={User}></Route>
        <Route path="/user/:userId/posts" exact component={Posts}></Route>
        <Route
          path="/user/:userId/posts/:postId"
          exact
          component={Post}
        ></Route>
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
}

export default App;
