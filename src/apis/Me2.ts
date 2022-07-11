import axios from "axios";

const Me2Api = axios.create({
    baseURL: "http://localhost:3001"
})

export { Me2Api }