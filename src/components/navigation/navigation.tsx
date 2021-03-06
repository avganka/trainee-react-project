import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../const';
import { getEmail } from '../../services/email';
import { logoutAction } from '../../store/api-actions';
import { getAuthStatus } from '../../store/selectors/selectros';
import { store } from '../../store/store';

function Navigation ():JSX.Element {

  const authorizationStatus = useSelector(getAuthStatus);

  const logoutHandler = () => {
    store.dispatch(logoutAction());
  };

  const email = getEmail();

  return (
    <nav className="header__nav">

      {
        authorizationStatus === AuthStatus.Auth
          ?
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={AppRoutes.Favorites}
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">
                  {email}
                </span>
              </Link>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href='/' onClick={(evt) => {
                evt.preventDefault();
                logoutHandler();
              }}
              >
                      Sign out
              </a>
            </li>
          </ul>
          :
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={AppRoutes.Login}
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to={AppRoutes.Login}>
                      Sign in
              </Link>
            </li>
          </ul>
      }
    </nav>
  );
}

export {Navigation};
export default memo(Navigation);
