
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return Object.assign({}, state, {restaurants: [...state.restaurants, {text: action.text, id: cuidFn()}]})
    case "DELETE_RESTAURANT":
      let restaurants = state.restaurants.filter((restaurant) => {
        return restaurant.id !== action.id
      })
      return { restaurants: restaurants }
      case "ADD_REVIEW":
        return Object.assign({}, state, {reviews: [...state.reviews, {text: action.text, id: cuidFn(), restaurantId: action.restaurantId}]})
      case "DELETE_REVIEW":
        let reviews = state.reviews.filter((review) => {
          return review.id !== action.id
        })
        return { reviews: reviews }
    default:
      return state
  }
}
