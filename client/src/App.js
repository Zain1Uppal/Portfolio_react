import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Mainpage } from './layout/Mainpage';
import { HeaderNav } from './layout/HeaderNav'
import { Aboutme } from './layout';
import './style.css'

function App() {
    return(
        <div id='app'>
            <HeaderNav />
            <main>
                <Switch>
                    <Route exact path = '/'>
                        <Aboutme/>
                    </Route>
                    <Route path = '/Github'>
                        <Mainpage/>
                    </Route>
                </Switch>
            </main>
        </div>
    )
}

export default App;