import axios from "axios";
/* base  url to make requests to the movie database*/
const instance = axios.create({ baseURL: "https://api.themoviedb.org/3", });
export default instance;
/*
 * Why to use this? 
 * if I use instance.get("xyz");
 * It'll be like this https://api.themoviesdb.org/3/xyz
 * Just appending it at the end to handle multiple requests efficiently
 */