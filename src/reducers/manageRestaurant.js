let id = 0
let reviewId = 0
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      id++
      let newRestaurant = Object.assign({}, action.restaurant, {id: id})
      return {restaurants: state.restaurants.concat(newRestaurant), reviews: state.reviews}
    case "DELETE_RESTAURANT":
      let removeRestaurant = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {restaurants: removeRestaurant, reviews: state.reviews}
    case "ADD_REVIEW":
      reviewId++
      let newReview = Object.assign({}, action.review, {restaurantId: action.id}, {id: reviewId})
      return {restaurants: state.restaurants, reviews: state.reviews.concat(newReview)}
    case "DELETE_REVIEW":
      let removeReview = state.reviews.filter(review => review.id !== action.id)
      return {restaurants: state.restaurants, reviews: removeReview}
    default:
      return state
  }
}
