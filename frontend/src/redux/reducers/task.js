import { GET_TASK, GET_SUCCESS, GET_FAILED } from "../actions/type";

const initialState = {
	isLoading: false,
	tasks: "",
	error: null,
};

const taskReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TASK:
			return {
				...state,
				isLoading: true,
			};
		case GET_SUCCESS:
			return {
				...state,
				isLoading: false,
				tasks: action.payload,
				error: null,
			};
		case GET_FAILED:
			return {
				...state,
				isLoading: false,
				tasks: "",
				error: action.payload,
			};

		default:
			return state;
	}
};
export default taskReducer;
