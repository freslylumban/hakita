import React from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import LoginRegister from './pages/LoginRegister';
import NotFound from './pages/NotFound';

const AppRoute = ({ layout: Layout, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

const PageLayout = props => (
  <section>
    <Header />
      {props.children}
    <Footer />
  </section>
)

const App = () => (
  <HashRouter>
    <Switch>
      <AppRoute exact path="/" layout={PageLayout} component={Home} />
      <AppRoute exact path="/blog" layout={PageLayout} component={Blog} />
      <Route exact path="/loginregister" component={LoginRegister} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
)

export default App;
