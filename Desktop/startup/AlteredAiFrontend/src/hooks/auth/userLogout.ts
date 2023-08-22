import Cookies from "js-cookie";
import { authService } from "../../services/api";


export const userLogout = () => {

   const logOut = (afterFunction: any) => {
    const userJson = JSON.parse(Cookies.get("currentUser"));
    const refreshToken = userJson.tokens.refresh.token;
    return authService.logout(refreshToken, afterFunction);
   }
   return { logOut };
}


