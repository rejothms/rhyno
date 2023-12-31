import axios from "axios";

const createAxios = (baseUrl: string) => {
    const instance = axios.create({
        baseURL: baseUrl,
        timeout: 30000
    })
    instance.interceptors.request.use(
        (config: any) => {
            return config;
        },
        (error: any) => Promise.reject(error)
    );
    instance.interceptors.response.use(
        (response: any) => {
            return response;
        },
        (error) => Promise.reject(error)
    )
    return instance;
}
const api = createAxios('https://club.azurewebsites.net');
export {api};