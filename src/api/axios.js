import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "99f3974781b4041afb2f3c9248233166",
        language: "ko-KR",
    },
});

export default instance;