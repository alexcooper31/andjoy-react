import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Layout from './Layout';
import Home from './Routes/Home';
import GamePage from './Routes/GamePage';
import WishList from './Routes/WishList';
import Login from './Routes/Unprotected/Login';
import CreateUser from './Routes/Unprotected/CreateUser';

const MainRouter = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/new-user'>
          <CreateUser />
        </Route>

        <Route path='/game/:gameID'>
          <GamePage />
        </Route>

        <Route path='/wish-list'>
          <WishList />
        </Route>
        
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default MainRouter;
