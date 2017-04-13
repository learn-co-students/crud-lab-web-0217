
import cuid from 'cuid'
export const cuidFn = cuid

let idCount = 0
export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
	switch(action.type){
		case 'ADD_RESTAURANT':
			idCount++
			let newRestaurant = {text: action.restaurant.text, id: idCount}
			return {restaurants: [...state.restaurants, newRestaurant], reviews: [...state.reviews]}

		case 'DELETE_RESTAURANT':
			return {
				restaurants: (state.restaurants.filter((obj) => obj.id !== action.id)),
				reviews: state.reviews
			}
		
		case 'DELETE_REVIEW':
			return {
				reviews: (state.reviews.filter((obj) => obj.id !== action.id)),
				restaurants: state.restaurants
			}
		
		case 'ADD_REVIEW':
			let newReview = {text: action.review.text, restaurantId: action.review.restaurantId, id: cuid()}
			return {restaurants: [...state.restaurants], reviews: [...state.reviews, newReview]}
		
		default:
			return state
	}
}