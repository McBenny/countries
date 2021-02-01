import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { URLS } from './utils';

import Countries from './containers/countries';
import Country from './containers/country';

import './App.scss';

const App = () => (
    <main className="app">
        <BrowserRouter>
            <Switch>
                <Route path={URLS.HOME} component={Countries} exact />
                <Route path={URLS.COUNTRY} component={Country} />
                <Route component={Countries} />
            </Switch>
        </BrowserRouter>
    </main>
);

export default App;
