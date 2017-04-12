
import cuid from 'cuid';
export const cuidFn = cuid;

let currId = 0
export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {

  switch (action.type) {
    case "ADD_RESTAURANT":
      const newRestaurant = { text: action.restaurant.text, id: cuid() }
      return {restaurants: state.restaurants.concat(newRestaurant), reviews: state.reviews}
    case "ADD_REVIEW":
      const newReview = { restaurantId: action.restaurantId, text: action.text}
      return {reviews: state.reviews.concat(newReview), restaurants: state.restaurants }
    case "DELETE_RESTAURANT":
      return { restaurants: state.restaurants.filter((r) => r.id !== action.id), reviews: state.reviews}
    case "DELETE_REVIEW":
      if (action.id === undefined) {
        let newReviews = state.reviews
        newReviews.pop()
        return { reviews: newReviews}
      }
      return { reviews: state.reviews.filter((r) => r.id !== action.id), restaurants: state.restaurants}
    default:
      return state
  }

}
