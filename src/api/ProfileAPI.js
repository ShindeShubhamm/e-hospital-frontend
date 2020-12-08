import axios from 'axios'
import { getAPI } from "../config/api"

const api = getAPI()

const ProfileAPI = {
  get: (id) => {
    return axios.get(`${api}/user/${id}`)
  },
  create: (data) => {
    axios.post(`${api}/user`, data)
  },
  update: (id, data) => {
    axios.patch(`${api}/user/${id}`, data)
  }
}

export default ProfileAPI