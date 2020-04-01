import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import First from './pages/first';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={First} />
            </Switch>
        </BrowserRouter>
    );
}