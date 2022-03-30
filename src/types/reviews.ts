export type Reviews = Review[]

export type Review = {
  offerrId: number,
  reviewId: number,
  userName: string,
  userAvatar: string,
  text: string,
  rating: number,
  date: string,

}
