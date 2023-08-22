import axios, { AxiosInstance } from "axios";

export class AuthService {
    protected readonly instance: AxiosInstance;
    public constructor(url: string) {
        this.instance = axios.create({
            baseURL: url,
            timeout: 30000,
            timeoutErrorMessage: "Time out!",
        })
    }

    login = (email: string,password: string) => {
        return this.instance.post("/login",{
            email,
            password,
        })
        .then((res) => {
            console.log(res.data)
            // return {
              
            // }
        })

    }
    
}