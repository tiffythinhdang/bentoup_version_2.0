import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Splash from './splash';
import EasyModeComponent from './game/easy_mode';
import CompetitiveModeComponent from './game/competitive_mode';
import ChooseModeComponent from './game/choose_mode';
import GameOverComponent from './game/game_over';

const App = () => (
  <HashRouter>
    <Header/>
    <GameOverComponent/>
    <Switch>
      <Route exact path='/' component={Splash} />
      <Route exact path='/choose-mode' component={ChooseModeComponent} />
      <Route exact path='/easy-mode' component={EasyModeComponent} />
      <Route exact path='/competitive-mode' component={CompetitiveModeComponent} />
    </Switch>
    <Footer/>
  </HashRouter>
)

export default App;
