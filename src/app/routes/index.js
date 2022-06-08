import React from 'react';
import {Router as ReactRouter, Redirect, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import routes from './routes';
import PublicRoute from "./PublicRoute";

const history = createBrowserHistory();

function Routes() {
    return (
        <ReactRouter history={history}>
            <Switch>
                {
                    routes.map((route, i) => {
                        if (route.notFound) {
                            return <Redirect key={i} to={{pathname: '/'}}/>
                        }
                        return <PublicRoute key={i} {...route} />
                    })
                }
            </Switch>
        </ReactRouter>
    );
}

export default Routes;
