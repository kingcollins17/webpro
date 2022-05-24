import {
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAILED,
	LOGIN_SUCCESS,
	LOGOUT,
	CLEAR_STATE,
} from "../actions/type";

const initialState = {
	token: localStorage.getItem("token"),
	isAuth: false,
	isLoading: false,
	user: null,
	error: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case USER_LOADED:
			return {
				...state,
				isAuth: true,
				isLoading: false,
				user: action.payload,
				error: null,
			};
		case LOGIN_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				isAuth: true,
				isLoading: false,
				user: action.payload.user,
			};
		case LOGOUT: {
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuth: false,
				isLoading: false,
				user: null,
				error: null,
			};
		}
		case CLEAR_STATE:
		case AUTH_ERROR:
		case LOGIN_FAILED:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuth: false,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
export default authReducer;
