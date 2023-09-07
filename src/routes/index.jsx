import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Login from '../pages/Login';
import MyInfo from '../pages/MyInfo';
import MyOrders from '../pages/MyOrders';
import Product from '../pages/Product';

export default function defaultRoutes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/menu/" component={Menu} />
      <MyRoute exact path="/login/" component={Login} />
      <MyRoute exact path="/my-info/" component={MyInfo} />
      <MyRoute exact path="/my-orders/" component={MyOrders} />
      <MyRoute exact path="/product/:id/edit" component={Product} />
      <MyRoute path="*" component={Home} />
    </Switch>
  );
}
