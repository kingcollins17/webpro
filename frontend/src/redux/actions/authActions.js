import axios from "axios";
import {
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT,
} from "./type";
//action creators for the user loading and authentication types...

const userLoading = () => {
	return {
		type: USER_LOADING,
	};
};
const userLoaded = (user) => {
	return {
		type: USER_LOADED,
		payload: user,
	};
};
const authError = (err) => {
	return {
		type: AUTH_ERROR,
		payload: err,
	};
};
const loginSuccess = (res) => {
	return {
		type: LOGIN_SUCCESS,
		payload: res,
	};
};
const loginFailed = (err) => {
	return {
		type: LOGIN_FAILED,
		payload: err,
	};
};

const logoutUser = () => {
	return {
		type: LOGOUT,
	};
};
// make axios request for loading the user....
export const loadUser = () => {
	return (dispatch, getState) => {
		//user loading action dispatch to set the state to loading true../.
		dispatch(userLoading());

		//fetch token from the local storage...
		const token = getState().auth.token;

		//header...
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		//if token, add to the headers congif...

		if (token) {
			config.headers["Authorization"] = `Token ${token}`;
		}
		axios
			.get("auth/user/", config)
			.then((res) => dispatch(userLoaded(res.data)))
			.catch((err) => authError(err.message));
	};
};

export const login = (email, password) => {
	return (dispatch) => {
		//header...
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		//request body...
		const body = JSON.stringify({ email, password });
		axios
			.post("auth/login/", body, config)
			.then((res) => {
				//console.log("logged in");
				dispatch(loginSuccess(res.data));
			})
			.catch((err) => {
				dispatch(loginFailed(err.response.data));
				authError(err.message);
				console.log(err);
			});
	};
};
// create the log out functionality...
export const logout = () => {
	return (dispatch, getState) => {
		//user loading action dispatch to set the state to loading true../.
		dispatch(userLoading());
		//fetch token from the local storage...
		const token = getState().auth.token;

		//header...
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		//if token, add to the headers congif...

		if (token) {
			config.headers["Authorization"] = `Token ${token}`;
		}

		//for any post request, we have to provide a body, even if it is an empty string.
		//if not it would not work

		//the body empty string...
		const body = "";
		axios
			.post("auth/logout/", body, config)
			.then((res) => {
				dispatch(logoutUser());
			})
			.catch((err) => {
				authError(err.message);
				console.log(err.response.data);
			});
	};
};
