import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoutes, AuthStatus } from '../../const';

import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import PageNotFound from '../page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { Cities } from '../../types/offers';
import { ReviewsMocks } from '../../types/reviews';
import OfferDetailed from '../offer-detailed/offer-detailed';

type PlacesCountProp = {
  placesCount:number
  offers: Cities;
  reviews: ReviewsMocks;
}

function App({placesCount, offers, reviews}:PlacesCountProp): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.Main} element={<Main placesCount={placesCount} offers={offers}/>}/>
        <Route path={AppRoutes.Login} element={<Login/>}/>
        <Route path={AppRoutes.Favorites} element={
          <PrivateRoute
            authStatus={AuthStatus.Auth}
          >
            <Favorites offers={offers}/>
          </PrivateRoute>
        }
        />
        <Route path={`${AppRoutes.Room}/:id`} element={<OfferDetailed offers={offers[0]} reviews={reviews[0]}/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
