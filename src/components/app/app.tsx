import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../const';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import PageNotFound from '../page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import OfferDetailed from '../offer-detailed/offer-detailed';
import { useSelector } from 'react-redux';
import { Preloader } from '../preloader/preloader';
import { RootState } from '../../store/root-reducer';

function App(): JSX.Element {

  const isDataLoaded = useSelector(({DATA}: RootState) => DATA.isDataLoaded);
  const authorizationStatus = useSelector(({USER}: RootState) => USER.authorizationStatus);

  if (!isDataLoaded || authorizationStatus === AuthStatus.Unknown) {
    return (
      <Preloader/>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main/>}/>
        <Route path={AppRoutes.Login} element={
          <PrivateRoute>
            <Login/>
          </PrivateRoute>
        }
        />
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
export default App;
