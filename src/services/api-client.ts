import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: ({
        key: 'a2462714552e4c1ba4074418ca9e2ff1'
    })
})