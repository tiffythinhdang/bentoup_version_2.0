import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Splash from './splash';
import EasyModeComponent from './game/easy_mode';
import CompetitiveModeComponent from './game/competitive_mode';
import ChooseModeComponent from './game/choose_mode';
import GameOverComponent from './game/game_over';
import SaveScoreFormContainer from './game/save_score_form_container';
import EasyHighScoresIndexContainer from './game/easy_highscores_index_container';
import CompetitiveHighScoresIndexContainer from './game/competitive_highscores_index_container';

const App = () => (
  <HashRouter>
    <Header/>
    <GameOverComponent/>
    <Switch>
      <Route exact path='/' component={Splash} />
      <Route path='/choose-mode' component={ChooseModeComponent} />
      <Route path='/easy-mode' component={EasyModeComponent} />
      <Route path='/competitive-mode' component={CompetitiveModeComponent} />
      <Route path='/scores/save' component={SaveScoreFormContainer} />
      <Route path='/scores/high-easy' component={EasyHighScoresIndexContainer} />
      <Route path='/scores/high-competitive' component={CompetitiveHighScoresIndexContainer} />
    </Switch>
    <Footer/>
  </HashRouter>
)

export default App;
