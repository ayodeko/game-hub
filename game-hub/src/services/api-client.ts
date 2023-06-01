import axios, {Axios} from "axios";

const baseClient =  axios.create({baseURL: "https://api.rawg.io/api", params: {key: "c3cfbbe87940495e9086cf032e4fd2bc"}})

export default baseClient;