export type ReviewsMocks = Reviews[];

export type Reviews = {
  offerId: number,
  reviews: Review[]
}

export type Review = {
  userName: string,
  userAvatar: string,
  text: string,
  score: number,
  date: string,
}
