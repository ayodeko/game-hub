import axios, {Axios} from "axios";

const baseClient =  axios.create({baseURL: "https://api.rawg.io/api", params: {key: "62335290e67a47b5ac76ba8e2e45ed3b"}})

export default baseClient;