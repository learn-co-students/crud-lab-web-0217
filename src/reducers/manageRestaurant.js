import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
  state={restaurants:[], reviews: []}, action) {
    switch (action.type) {
      case "ADD_RESTAURANT":
        return Object.assign({}, state, {restaurants: [...state.restaurants, {text: action.text, id: cuidFn()}]})
      case "DELETE_RESTAURANT":
        return Object.assign({}, state, {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)})
      case "ADD_REVIEW":
        return Object.assign({}, state, {reviews: [...state.reviews, {text: action.text, id: cuidFn(), restaurantId: action.restaurantId}]})
      case "DELETE_REVIEW":
        return Object.assign({}, state, {reviews: state.reviews.filter(review => review.id !== action.id)})
      default:
        return state
    }
}
