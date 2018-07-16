import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://84d1161a.ngrok.io/v1'
  })
}
