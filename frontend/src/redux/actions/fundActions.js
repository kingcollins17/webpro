import axios from "axios";
import { GET_FUNDS, GOT_FUNDS, GET_FUNDS_FAILED } from "./type";

const getFunds = () => {
	return {
		type: GET_FUNDS,
	};
};

const gotFunds = (funds) => {
	return {
		type: GOT_FUNDS,
		payload: funds,
	};
};
const fundFailed = (err) => {
	return {
		type: GET_FUNDS_FAILED,
		payload: err,
	};
};

const fetchFunds = () => {
	return (dispatch, getState) => {
		//make axios request to the fund api...
		dispatch(getFunds());
		//get token from state
		const token = getState().auth.token;

		//setup the request configuration
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		if (token) {
			config.headers["Authorization"] = `Token ${token}`;
		}
		axios
			.get("fund/user/", config)
			.then((res) => dispatch(gotFunds(res.data)))
			.catch((err) => {
				console.log(err.response.data);
				dispatch(fundFailed(err.response.data));
			});
	};
};
export default fetchFunds;
