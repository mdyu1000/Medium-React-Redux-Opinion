import {
	SET_NEXT_PG
} from '../action/guineaPigAction'

const initialState = {
	GUINEAPATHS: [
	  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
	  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
	  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
	  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
	],
	index: 0
}

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_NEXT_PG:
			return {
				...state,
				index: (state.index + 1) % state.GUINEAPATHS.length
			}
		default:
			return state
	}
}