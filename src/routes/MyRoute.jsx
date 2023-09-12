import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({
  component: Component,
  isClosed,
  onlyAvailableTo,
  ...rest
}) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  if (onlyAvailableTo === 'admin' && !isAdmin) {
    return <Redirect to={{ pathname: '/' }} />;
  }

  if (onlyAvailableTo === 'customer' && isAdmin) {
    return <Redirect to={{ pathname: '/' }} />;
  }

  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
  exact: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
  onlyAvailableTo: PropTypes.string,
};
