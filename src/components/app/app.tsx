import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../const';

import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import PageNotFound from '../page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import OfferDetailed from '../offer-detailed/offer-detailed';
import { cities } from '../../mocks/cities';
import { offers } from '../../mocks/offers';
import { reviews } from '../../mocks/reviews';

const Settings = {
  PLACES_COUNT: 300,
};

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main placesCount={Settings.PLACES_COUNT} cities={cities}/>}/>
        <Route path={AppRoutes.Login} element={<Login/>}/>
        <Route path={AppRoutes.Favorites} element={
          <PrivateRoute
            authStatus={AuthStatus.Auth}
          >
            <Favorites cities={cities} offers={offers}/>
          </PrivateRoute>
        }
        />
        <Route path={`${AppRoutes.Room}/:id`} element={<OfferDetailed offers={offers} reviews={reviews[0]}/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
