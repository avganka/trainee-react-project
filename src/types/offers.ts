export type Offers = {
  offer: Offer[]
}

export type Offer = {
  id: number,
  name: string,
  price: number,
  rating: number,
  isPremium: boolean,
  coords: number[],
  host: Host,
  description: string,
  photos: string[],
  details: OfferDetails,
  facilities: string[],
}

export type Host = {
  name: string,
  status: string,
  photo: string
}

export type OfferDetails = {
  type: string,
  bedrooms: number,
  maxAdults: number,
}
