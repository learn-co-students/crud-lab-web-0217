
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      const restaurant = {...action.restaurant, id: cuidFn()}
      return {restaurants: state.restaurants.concat(restaurant), reviews: state.reviews}
    case 'DELETE_RESTAURANT':
      return {restaurants: state.restaurants.filter((rest) => rest.id !== action.id), reviews: state.reviews}
    case 'ADD_REVIEW':
      const review = {...action.review, id: cuidFn()}
      return {restaurants: state.restaurants, reviews: state.reviews.concat(review)}
    case 'DELETE_REVIEW':
      return {restaurants: state.restaurants, reviews: state.reviews.filter((review)=>review.id !== action.id)}
    default:
      return state
  }
}
