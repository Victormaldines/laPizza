import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ component: Component, ...rest }) {
  return <Route  {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isClosed: false,
  exact: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
