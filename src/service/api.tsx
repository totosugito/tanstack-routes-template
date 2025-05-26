const APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL
const APP_URL_V1 = APP_BASE_URL + "/api/v1"
export const AppApi = {
  auth: {
    login: APP_URL_V1 + "/login",
    logout: APP_URL_V1 + "/user/logout",
  }
}