import axios from "axios"
import { type RegisterRequestBody, type AuthResponse, type LoginRequestBody } from "../models/ApiTypes"

const isDev = process.env.NODE_ENV === "development"

const BASE_URL = isDev ? process.env.VITE_API_URL : process.env.VITE_PRODUCTION_API_URL

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`
}

export const authApi = {
    register: (body: RegisterRequestBody): Promise<AuthResponse> => axios.post(`${BASE_URL}/auth/register`, body),
    login: (body: LoginRequestBody): Promise<AuthResponse> => axios.post(`${BASE_URL}/auth/login`, body),
    getMe: (): Promise<AuthResponse> => axios.get(`${BASE_URL}/auth/me`, { headers })
}