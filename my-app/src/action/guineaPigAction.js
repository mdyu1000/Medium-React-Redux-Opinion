export const SET_NEXT_PG = "SET_NEXT_PG"
export const RECEIVE_ALL_PG = "RECEIVE_ALL_PG"

export const setNextPG = () => {
	return {
		type: SET_NEXT_PG,
	}
}

export const fetchAllPG = () => dispatch => {
	return fetch("http://localhost:4000/GET/AllPG")
				.then(res => res.json())
				.then(json => {
					dispatch(receiveAllPG(json))
				})
}

const receiveAllPG = AllPG => {
	return {
		type: RECEIVE_ALL_PG,
		AllPG
	}
}