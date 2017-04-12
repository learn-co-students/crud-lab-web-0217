import cuid from 'cuid';
export const cuidFn = cuid;


export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = { text: action.restaurant.text, id: cuidFn() };
      return Object.assign({}, state, {
        restaurants: state.restaurants.concat(restaurant),
      });
    case "DELETE_RESTAURANT":
      return { restaurants: state.restaurants.filter(r => r.id !== action.id) }
    case "ADD_REVIEW":
      const review = Object.assign({}, action.review, {id: cuid()})
      return { reviews: state.reviews.concat(review) }
    case "DELETE_REVIEW":
      return { reviews: state.reviews.filter(r => r.id !== action.id) }
    default:
      return state
  }
}
