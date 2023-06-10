import React from 'react'
import { Switch, Route, } from 'react-router-dom'
import routes from '../routes/index'
import Page404 from '../pages/404';
import Header from './header';
import HomeInstructor from '../pages/home_instructor';

function Layout() {
    return (
        <div>
            <div className="flex flex-col flex-1 w-full min-h-screen" style={{ background: '#E3E3E3' }}>
                {/* Header*/}
                <Header />
                {/* Routes */}
                <div className='mx-10'>
                    <Switch>
                        {JSON.parse(localStorage.getItem('user'))?.role == 'admin' ? routes.map((route, i) => {
                            return route.component ? (
                                <Route
                                    key={i}
                                    exact={true}
                                    path={`${route.path}`}
                                    render={(props) => <route.component {...props} />}
                                />
                            ) : null
                        }) : <Route
                            exact={true}
                            path={`/`}
                            component={HomeInstructor}
                        />}
                        <Route path="*" component={Page404} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Layout;
