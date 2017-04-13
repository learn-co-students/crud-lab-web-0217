
import cuid from 'cuid';
export const cuidFn = cuid;

let restaurant_id=0
export default function manageRestaurants(state = {
  restaurants: [], reviews: []}, action) {

  switch(action.type) {
    case 'ADD_RESTAURANT':
      restaurant_id++
      const restaurant = {text: action.restaurant.text, id: restaurant_id}
      return Object.assign({}, state,
                {restaurants: state.restaurants.concat(restaurant)})

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter((restaurant) => restaurant.id !== action.id)
      return Object.assign({}, {restaurants})

    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, {id: cuidFn()}, {restaurantId: action.review.restaurantId})
      return Object.assign({}, state, {reviews: state.reviews.concat(review)})

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter((review) => review.id !== action.id)
      return Object.assign({}, state, {reviews})

    default:
    return state
  }
}
