import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import GenresPage from './pages/genres/genres.component';
import CollectionPage from './pages/collection/collection.component';
import SummaryContainer from './pages/summary/summary.container';

import './app.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/genres" component={GenresPage} />
        <Route path="/collection" component={CollectionPage} />
        <Route path="/anime/:titleId" render={(props) => <SummaryContainer {...props} type={'search'} />} />
      </Switch>
    </div>
  );
}

export default App;
