import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Login from '../pages/Login';
import MyInfo from '../pages/MyInfo';
import MyOrders from '../pages/MyOrders';
import Product from '../pages/Product';
import Cart from '../pages/Cart';

export default function defaultRoutes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/menu/" component={Menu} />
      <MyRoute exact path="/login/" component={Login} />
      <MyRoute exact path="/my-info/" component={MyInfo} isClosed />
      <MyRoute
        exact
        path="/my-orders/"
        component={MyOrders}
        isClosed
        onlyAvailableTo="customer"
      />
      <MyRoute
        exact
        path="/product/"
        component={Product}
        isClosed
        onlyAvailableTo="admin"
      />
      <MyRoute
        exact
        path="/product/:id/edit"
        component={Product}
        isClosed
        onlyAvailableTo="admin"
      />
      <MyRoute
        exact
        path="/cart/"
        component={Cart}
        isClosed
        isAdminOnly={false}
        onlyAvailableTo="customer"
      />
      <MyRoute path="*" component={Home} />
    </Switch>
  );
}
