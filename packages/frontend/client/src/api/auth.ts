import axios from "axios"
import type { AuthResponse, LoginRequestBody, RegisterRequestBody } from "../models/ApiTypes"

const isDev = process.env.NODE_ENV === "development"

const BASE_URL = isDev ? process.env.VITE_API_URL : process.env.VITE_PRODUCTION_API_URL

const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("token")}`
}


export async function register(payload: RegisterRequestBody): Promise<AuthResponse> {
    try {
        const res = await axios.post(`${BASE_URL}/api/auth/register`, payload, {
            headers
        })

        if (!res.data.success) {
            throw new Error(res.data.message)
        }

        return res.data
    } catch (error) {
        throw error
    }
}


export async function login(payload: LoginRequestBody): Promise<AuthResponse> {
    try {
        const res = await axios.post(`${BASE_URL}/api/auth/login`, payload, {
            headers
        })

        if (!res.data.success) {
            throw new Error(res.data.message)
        }

        return res.data
    } catch (error) {
        throw error
    }
}
