import { useSelector } from 'react-redux';
import { Navigate, RouteProps } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../const';
import { RootState } from '../../store/root-reducer';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element,
}

function PrivateRoute({children}: PrivateRouteProps) {

  const authorizationStatus = useSelector(({USER}: RootState) => USER.authorizationStatus);

  if (children.type.name === 'Login') {
    return authorizationStatus === AuthStatus.NoAuth ? children : <Navigate to={AppRoutes.Main}/>;
  }

  return (
    authorizationStatus === AuthStatus.Auth ? children : <Navigate to={AppRoutes.Login}/>
  );
}

export {PrivateRoute};
export default PrivateRoute;
