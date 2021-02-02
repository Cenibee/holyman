// 리액트 컴포넌트로 사용할 App 컴포넌트에 대한 선언
import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";
import Home from './home'


export default function Employees() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Employees</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/list`}>list</Link>
                </li>
            </ul>

            {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
            <Switch>
                <Route path={`${match.path}/list`}>
                    <Home />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}