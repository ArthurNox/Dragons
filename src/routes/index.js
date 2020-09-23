import React from 'react'
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Detail from '../pages/Detail';
import Create from '../pages/Create';

import Route from './Route'


export default function Routes() {
  return (
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" component={Home} isPrivate/>
        <Route path="/detail/:id" component={Detail} isPrivate/>
        <Route path="/create" component={Create} isPrivate/>
    </Switch>
  )
}