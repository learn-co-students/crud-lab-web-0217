
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
  let newState = Object.assign({}, state)
  switch(action.type) {
    case 'ADD_RESTAURANT':
      let restaurant = {text: action.text, id: cuidFn()}
      newState.restaurants = [...newState.restaurants, restaurant]
      return newState
    case 'DELETE_RESTAURANT':
      newState.restaurants = newState.restaurants.filter((restaurant) => restaurant.id !== action.id)
      return newState
    case 'ADD_REVIEW':
      let review = {...action.review, id: cuidFn()}
      newState.reviews = [...newState.reviews, review]
      return newState
    case 'DELETE_REVIEW':
      newState.reviews = newState.reviews.filter((review) => review.id !== action.id)
      return newState
    default:
      return state
  }
}
