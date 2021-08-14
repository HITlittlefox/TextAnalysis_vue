import axios from "axios";

// TODO use different servers for development and release
//mock
const serverAddr = "http://localhost:3000"

//const serverAddr = "http://47.91.19.240:8000"

export const axiosGet = async (path, params) => (await axios.get(`${serverAddr}${path}`, { params })).data

export const axiosPost = async (path, body) => (await axios.post(`${serverAddr}${path}`, body)).data
