import { connect, ConnectedProps } from 'react-redux';
import { Navigate, RouteProps } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../const';
import { State } from '../../types/state';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element,
}

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedPrivateRouteProps = PropsFromRedux & PrivateRouteProps;

function PrivateRoute({authorizationStatus, children}: ConnectedPrivateRouteProps) {


  if (children.type.name === 'Login') {
    return authorizationStatus === AuthStatus.NoAuth ? children : <Navigate to={AppRoutes.Main}/>;
  }


  return (
    authorizationStatus === AuthStatus.Auth ? children : <Navigate to={AppRoutes.Login}/>
  );
}

export {PrivateRoute};
export default connector(PrivateRoute);
