import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return Object.assign({}, state, { restaurants: [...state.restaurants, {id: cuid(), text: action.text} ]})
    case 'DELETE_RESTAURANT':
      let filteredList = state.restaurants.filter(r => r.id !== action.id)
      return {restaurants: filteredList}
    case 'ADD_REVIEW':
       return Object.assign({}, state, { reviews: [...state.reviews, {id: cuid(), restaurantId: action.id, text: action.text }]})
       case 'DELETE_REVIEW':
         let filteredReviewList = state.reviews.filter(r => r.id !== action.id)
         return {reviews: filteredReviewList}
    default:
      return state
  }
}
