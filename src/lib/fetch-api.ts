import axios from 'axios'

export const axiosInstance = axios.create({})

export const fetchApi = async ({
                                 method,
                                 url,
                                 body,
                                 headers,
                                 params,
                               }: {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  url: string
  body?: any
  headers?: Record<string, string>
  params?: Record<string, any>
}) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      data: body ?? null,
      headers: headers ?? {},
      params: params ?? {},
    })

    return response.data
  } catch (error) {
    throw error
  }
}
