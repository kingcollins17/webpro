import { GET_FUNDS, GOT_FUNDS, GET_FUNDS_FAILED } from "../actions/type";

const initialState = {
	fundLoading: false,
	funds: null,
	fundError: null,
};

const fundReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_FUNDS:
			return {
				...state,
				fundLoading: true,
			};
		case GOT_FUNDS:
			return {
				...state,
				fundLoading: false,
				funds: action.payload,
				fundError: null,
			};
		case GET_FUNDS_FAILED:
			return {
				fundLoading: false,
				funds: null,
				fundError: action.payload,
			};
		default:
			return state;
	}
};
export default fundReducer;
