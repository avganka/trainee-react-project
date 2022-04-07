import { City } from './cities';
import { Offer } from './offers';

export type State = {
  city: City,
  offers: Offer[];
  sortingType: string
}

