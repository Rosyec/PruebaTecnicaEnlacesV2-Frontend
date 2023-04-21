import type { Login, Register } from '@/helpers/data.interface'
import axios from 'axios'

const API = axios.create({ baseURL: 'https://prueba-tecnica-enlaces-v2-backend.vercel.app' })

export const getToken = async (email: string) => {
  try {
    const response = await API.post('/generateJWT', { email })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const login = async (email: string, password: string, token: string) => {
  try {
    const response = await API.post<Login>(
      '/users/login',
      { email, password },
      { headers: { Authorization: token } }
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const register = async (name: string, email: string, password: string) => {
  try {
    const response = await API.post<Register>('/users/register', { name, email, password })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
