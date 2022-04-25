export enum AppRoutes {
  Main = '/',
  Login = '/login',
  Room = '/offer',
  Favorites = '/favorites'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Favorite = '/favorite',
  Logout = '/logout',
  Comments = '/comments',
}

export enum Cities {
  Paris = 'Paris',
  Amsterdam =  'Amsterdam',
  Cologne= 'Cologne',
  Dusseldorf =  'Dusseldorf',
  Hamburg =  'Hamburg',
  Brussels =  'Brussels',
}

export enum SortingTypes {
  Popular = 'Popular',
  LowToHighPrice =  'Price: low to high',
  HighToLowPrice =  'Price: high to low',
  TopRated = 'Top rated first',
}

export const MOUNTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
