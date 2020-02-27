import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import './app.scss';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const CollectionPage = lazy(() => import('./pages/collection/collection.component'));
const GenresPage = lazy(() => import('./pages/genres/genres.container'));
const CatalogPage = lazy(() => import('./pages/catalog/catalog.container'));
const SummaryPage = lazy(() => import('./pages/summary/summary.container'));


function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
            <Route exact path="/" component={Homepage} />
            <Route path="/genres" component={GenresPage} />
            <Route path="/collection" component={CollectionPage} />
            <Route path="/summary/:titleId" render={(props) => <SummaryPage {...props} />} />
            <Route exact path="/catalog/:catalogMode" render={(props) => <CatalogPage {...props} withSubtype={false} />} />
            <Route path="/catalog/:catalogMode/:modeSubtype" render={(props) => <CatalogPage {...props} withSubtype />} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
