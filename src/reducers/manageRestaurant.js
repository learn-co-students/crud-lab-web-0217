import cuid from 'cuid';
export const cuidFn = cuid;

const initialState = {restaurants: [], reviews: []}

function restaurantsReducer(state, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
        return [...state, {text: action.payload.text, id: action.payload.id}]
    case 'DELETE_RESTAURANT':
        return state.filter(restaurant => restaurant.id !== action.id)
    default:
      return state
    }
}

function reviewsReducer(state, action) {
  switch (action.type) {
    case 'ADD_REVIEW':
        return [...state, {text: action.payload.text, restaurantId: action.payload.restaurantId, id: action.payload.id} ]
    case 'DELETE_REVIEW':
        return state.filter(review => review.id !== action.id)
    case 'DELETE_RESTAURANT':
        return state.filter(review => review.restaurantId !== action.id)
    default:
      return state
  }
}

export default function manageRestaurants(state = initialState, action) {
  return {
    restaurants: restaurantsReducer(state.restaurants, action),
    reviews: reviewsReducer(state.reviews, action)
  }
}
