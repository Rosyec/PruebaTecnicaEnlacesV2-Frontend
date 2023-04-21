import type { Login, Post, Register, UpdatePost } from '@/helpers/data.interface'
import axios from 'axios'

const API = axios.create({ baseURL: 'https://prueba-tecnica-enlaces-v2-backend.vercel.app' })

export const getToken = async (email: string) => {
  try {
    return (await API.post('/generateJWT', { email })).data
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
    return (await API.post<Register>('/users/register', { name, email, password })).data
  } catch (error) {
    console.log(error)
  }
}

export const getAllPosts = async () => {
  try {
    return (await API.get<Post[]>('/posts')).data
  } catch (error) {
    console.log(error)
  }
}

export const getPostById = async (id: string) => {
  try {
    return (await API.get<Post>(`/posts/${id}`)).data
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = async (id: string, data: UpdatePost) => {
  try {
    return (await API.put<Post>(`/posts/${id}`, data)).data
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = async (id: string) => {
  try {
    await API.delete(`/posts/${id}`)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
