import logo from './logo.svg';
import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom';
import { HomeTemplate } from './template/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import Detail from './pages/Detail/Detail';
import { CheckoutTemplate } from './template/CheckoutTemplate/CheckoutTemplate';

import Checkout from './pages/Checkout/Checkout';
import { Suspense,lazy } from 'react';
// const CheckoutTemplateLazyload = lazy(()=> import ('./template/CheckoutTemplate/CheckoutTemplate'))
export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/' exact Component={Home} />
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/contact' exact Component={Contact} />
        <HomeTemplate path='/news' exact Component={News} />
        <HomeTemplate path='/detail/:id' exact Component={Detail} />
        <CheckoutTemplate path='/checkout/:id' exact Component={Checkout} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </Router>
  )
}

export default App;
