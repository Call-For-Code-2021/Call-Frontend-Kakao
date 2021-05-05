import React from 'react';
import Nav from './components/nav';
import Section from './components/section';
import Query from './components/query';
import Query_Main from './components/querying';
import Scrap from './components/scrap';
import Notice from './components/notice';
import Login_Main from './components/login_main';
import Login_input from './components/login_input';
import Login_idfind from './components/login_idfind';
import Login_pwfind from './components/login_pwfind';
import Login_register from './components/login_register';
import Mypage_Main from './components/mypage_main';
import NotFound from "./components/NotFound";

import { Route, Switch, Redirect } from 'react-router-dom'; // Redirect 컴포넌트 import

const App = () => {
    return (
        <>
            <Query />
            <Section />
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Section} />
                    <Route path="/querying" component={Query_Main} />
                    <Route path="/scrap" component={Scrap} />
                    <Route path="/notice" component={Notice} />
                    <Route path="/login_main" component={Login_Main} />
                    <Route path="/login_input" component={Login_input} />
                    <Route path="/login_idfind" component={Login_idfind} />
                    <Route path="/login_pwfind" component={Login_pwfind} />
                    <Route path="/login_register" component={Login_register} />
                    <Route path="/mypage_main" component={Mypage_Main} />
                    <Route path="/not-found" component={NotFound} />
                    <Redirect to="/not-found" component={NotFound} />
                </Switch>
            </div>
            <Nav />
        </>
    );
};

export default App;
