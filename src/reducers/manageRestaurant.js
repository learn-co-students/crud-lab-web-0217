import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            return Object.assign({}, state, { restaurants: [...state.restaurants, {id: cuid(), text: action.text} ]})
        case "DELETE_RESTAURANT":
            let filteredRestaurants = state.restaurants.filter(r => r.id !== action.id)
            return { restaurants: filteredRestaurants }
        case "ADD_REVIEW":
            return Object.assign({}, state, { reviews: [...state.reviews, {id: cuid(), restaurantId: action.id, text: action.text }]})
        case "DELETE_REVIEW":
            let filteredReviews = state.reviews.filter(r => r.id !== action.id)
            return { reviews: filteredReviews }
        default:
            return state
    }
}
