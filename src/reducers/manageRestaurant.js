
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {text: action.text, id: cuid()}
      // let newRestaurants = [...state.restaurants, {name: action.text, id: cuidFn()}]
      return Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant)})
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(item => item.id !== action.id)
      const reviews = state.reviews.filter(item => item.restaurantId !== action.id)
      return Object.assign({}, state, {restaurants, reviews})
    case 'ADD_REVIEW':
      const newReview = {text: action.text, id: cuid(), restaurantId: action.restaurantId }
      return Object.assign({}, state, {reviews: state.reviews.concat(newReview)})
    case 'DELETE_REVIEW':
      debugger
      const updatedReviews = state.reviews.filter(item => item.id !== action.id)
      return Object.assign({}, state, {reviews: updatedReviews})
    default:
      return state
  }

}
