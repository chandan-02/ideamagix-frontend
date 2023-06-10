import { Switch, Route, } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import './css/App.css'

import Layout from './components/Layout'
import Login from './pages/login'
//Routes
import ProtectedRoute from './routes/ProtectedRoute'

function App() {

  return (
    <>
      <ToastContainer />
      <Switch>
        <Route exact={true} path={`/login`} component={Login} />
        <ProtectedRoute path="/" component={Layout} />
      </Switch>
    </>
  )
}

export default App
