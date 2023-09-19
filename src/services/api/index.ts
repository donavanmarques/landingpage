import axios from "axios";

const Api = axios.create({
	baseURL: "https://us-central1-principal-storm-395723.cloudfunctions.net/",
});

export default Api;
