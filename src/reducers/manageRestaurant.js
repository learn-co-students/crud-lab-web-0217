import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      let restaurant = { text: action.restaurant.text, id: cuidFn() }
      return Object.assign({}, state, {
        restaurants: state.restaurants.concat(restaurant)
      })

    case 'DELETE_RESTAURANT':
      let restaurants = state.restaurants.filter(rest => rest.id !== action.id)
      let revs = state.reviews.filter(rev => rev.restaurantId !== action.id)
      return Object.assign({}, state, { restaurants, reviews:revs })

    case 'ADD_REVIEW':
      let review = Object.assign({}, action.review, {id: cuidFn()} )
      return Object.assign({}, state, {
        reviews: state.reviews.concat(review)
      })

    case 'DELETE_REVIEW':
      let reviews = state.reviews.filter(review => review.id !== action.id)
      return Object.assign({}, state, { reviews })

    default:
      return state;
  }
}
