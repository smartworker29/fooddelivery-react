import React from 'react';
import { Switch, Route } from 'react-router-dom'
import App from '../app.js';

const Routes = () => (
    <div>
        <main>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </main>
    </div>
);

export default Routes;