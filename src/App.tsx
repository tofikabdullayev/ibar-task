import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from 'react-router-dom';
import { Container } from 'reactstrap';
import Users from './pages/Users';
import User from './pages/User';
import Posts from './pages/Posts';
import Post from './pages/Post';
import AddUser from './pages/AddUser';
import AddPost from './pages/AddPost';

function App() {
  return (
    <Container>
      <Router>
        <h1>
          <Link to="/">IBAR task</Link>
        </h1>
        <hr />
        <Switch>
          <Route path="/" exact component={Users}></Route>
          <Route path="/user/add" exact component={AddUser}></Route>
          <Route path="/user/:userId" exact component={User}></Route>
          <Route path="/user/:userId/posts" exact component={Posts}></Route>
          <Route
            path="/user/:userId/posts/add"
            exact
            component={AddPost}
          ></Route>
          <Route
            path="/user/:userId/posts/:postId"
            exact
            component={Post}
          ></Route>
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
