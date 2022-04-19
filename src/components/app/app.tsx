import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../const';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import PageNotFound from '../page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import OfferDetailed from '../offer-detailed/offer-detailed';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../../types/state';
import { Preloader } from '../preloader/preloader';

const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
  isDataLoaded,
  authorizationStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App({authorizationStatus, isDataLoaded}:PropsFromRedux): JSX.Element {
  if (!isDataLoaded || authorizationStatus === AuthStatus.Unknown) {
    return (
      <Preloader/>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main/>}/>
        <Route path={AppRoutes.Login} element={<Login/>}/>
        <Route path={AppRoutes.Favorites} element={
          <PrivateRoute>
            <Favorites/>
          </PrivateRoute>
        }
        />
        <Route path={`${AppRoutes.Room}/:id`} element={<OfferDetailed/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
