import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../types/const';

import Main from '../main/main';
// import MainEmpty from '../main-empty/main-empty';
import Favorites from '../favorites/favorites';
// import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Login from '../login/login';
import Room from '../room/room';
// import RoomNotLogged from '../room-not-logged/room-not-logged';
import PageNotFound from '../page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';

type PlacesCountProp = {
  placesCount:number
}

function App({placesCount}:PlacesCountProp): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main placesCount={placesCount}/>}/>
        <Route path={AppRoutes.Login} element={<Login/>}/>
        <Route path={AppRoutes.Favorites} element={
          <PrivateRoute
            authStatus={AuthStatus.NoAuth}
          >
            <Favorites/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoutes.Room} element={<Room/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
