import { GET_TASK, GET_SUCCESS, GET_FAILED } from "./type";
import axios from "axios";
const getTask = () => {
	return {
		type: GET_TASK,
	};
};
const getSuccess = (tasks) => {
	return {
		type: GET_SUCCESS,
		payload: tasks,
	};
};

const getFailed = (error) => {
	return {
		type: GET_FAILED,
		payload: error,
	};
};

const fetchTasks = () => {
	return (dispatch) => {
		dispatch(getTask());
		axios
			.get("task/")
			.then((res) => {
				console.log(res.data);
				dispatch(getSuccess(res.data));
			})
			.catch((err) => dispatch(getFailed(err.message)));
	};
};
export default fetchTasks;
