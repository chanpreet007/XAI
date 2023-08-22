import Cookies from 'js-cookie';
import { User } from "../../types/user";
import { authService } from "../../services/api";

export const userLogin = () => {
    const login = async (email:string, password: string) => {
        const user = await authService.login(email, password);
        if(user){
            Cookies.set("currentUser", JSON.stringify(user));
        }
        return user as User
        
    }
    return { login }
}