import axios, {Axios} from "axios";

const baseClient =  axios.create({baseURL: "https://api.rawg.io/api", params: {key: "8602c4ed94dd4420886f0a5b82979253"}})

export default baseClient;