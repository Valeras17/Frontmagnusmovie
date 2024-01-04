import { request } from "../utils/axios-interceptors";

export const movieRequest = () => request({ url: "/movies" });