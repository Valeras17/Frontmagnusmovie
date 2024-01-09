import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
const baseUrl = "http://localhost:8080/api/v1";
const client = axios.create({ baseURL: baseUrl });

const onFailure = (e: any) => {
 throw e;
};
const onSuccess = (res: AxiosResponse) => {

 return res;
};

export const request = (config: AxiosRequestConfig) => {
 
 const userData = localStorage.getItem("user") ?? `{"token":""}`;
 const user = JSON.parse(userData);
 const token = user.token;
 client.defaults.headers.common.Authorization = `Bearer ${token}`;
 return client(config).catch(onFailure).then(onSuccess);
};