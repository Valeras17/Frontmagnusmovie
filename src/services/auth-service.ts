import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1/auth";
export const register = (username: string, email: string, password: string) => {
  return axios.post(`${baseUrl}/signup`, { username, email, password });
};
export const login = (username: string, password: string) => {
  return axios.post(`${baseUrl}/signin`, { username, password }).then((res) => {
    
    const token = res.data.jwt;
    const userRoles = res.data.roles;
    console.log("Response from login:", res.data);

    if (token) {
      localStorage.setItem("user", JSON.stringify({ token, username,roles: userRoles }));
    }
    
    return res;
  });
};
export const logout = () => {
  
  localStorage.removeItem("user");
};
const authService = { register, login, logout };
export default authService;
