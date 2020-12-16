import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
import Login from './components/login';
import FriendsList from './components/friendsList';
import Friend from './components/friend';
import AddFriend from './components/addFriend';
import Header from './components/header';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        {/* <Route path="/friends-list" component={FriendsList} /> */}
        <PrivateRoute path="/friends-list" component={FriendsList} />
        {/* <Route path="/add-friend" component={AddFriend} /> */}
        <PrivateRoute path="/add-friend" component={AddFriend} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
