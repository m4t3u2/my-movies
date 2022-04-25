import axios from "axios";

const API_KEY = "6aef5330db3cc3e8af592231a17e990f"; // Test.
const BASE_URL = "https://api.themoviedb.org/3/";
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl("movie/popular"));
  }
}
