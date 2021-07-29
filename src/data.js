import axios from "axios";

// TODO use different servers for development and release
const serverAddr = "http://localhost:3000"

export const axiosGet = async (path, params) => (await axios.get(`${serverAddr}${path}`, { params })).data

export const axiosPost = async (path, body) => (await axios.post(`${serverAddr}${path}`, body)).data
