
import cuid from 'cuid';
export const cuidFn = cuid;
let id=0
let revId=0

export default function manageRestaurant(state ={restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      id++
      const restaurant = Object.assign({}, action.restaurant, { id: id })
      return { restaurants: state.restaurants.concat(restaurant) }
    case 'DELETE_RESTAURANT':
      let newRestaurants = state.restaurants.filter((rest) => rest.id !== action.id)
      return { restaurants: newRestaurants }
    case 'ADD_REVIEW':
      revId ++
      const review = Object.assign({}, action.review, {id: revId})
      const newState = Object.assign({}, state, {reviews: state.reviews.concat(review)})
      return newState
    case 'DELETE_REVIEW':
      let newReviews = state.reviews.filter((rev) => rev.id !== action.id)
      return { reviews: newReviews }
    default:
      return state
  }
}
