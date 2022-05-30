import axios from "axios";
const KEY = '8d72539d-e398-4a6f-a2be-454cb26961ae'; // Enter your API KEY here

export default axios.create({
    baseURL: 'https://api.thedogapi.com/v1/breeds/',
    params: {
      limit: 80, // max number of dog objects fetched
      page: 1,
      order: 'DESC',
      api_key: KEY // API KEY
    }
})