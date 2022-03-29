import { Navigate, RouteProps } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../types/const';

type PrivateRouteProps = RouteProps & {
  children: JSX.Element;
  authStatus: AuthStatus;
}

export default function PrivateRoute(props: PrivateRouteProps) {
  const {authStatus, children} = props;

  return (
    authStatus === AuthStatus.Auth ? children : <Navigate to={AppRoutes.Login}/>
  );
}
