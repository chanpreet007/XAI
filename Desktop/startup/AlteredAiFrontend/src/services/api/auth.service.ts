import axios, { AxiosInstance } from 'axios';
import Cookies from "js-cookie";
import { getAuthorizationHeader } from "../../utils/getAuthorizationHeader";

 //function to convert our image to base64
 const convertBase64 = (file: Blob) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export class AuthService {
  protected readonly instance: AxiosInstance;
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Time out!",
    });
  }

  login = async (email: string, password: string) => {
    const res = await this.instance
      .post("/v1/auth/login", {
        email,
        password,
      });
    return {
      user: res.data.user,
      tokens: res.data.tokens,
    };
  };

  logout = async (refreshToken: string, afterFunction:any) => {
    await this.instance
      .post("/v1/auth/logout", {
        refreshToken: refreshToken,
      });
    afterFunction(false)
    Cookies.remove("currentUser");
    window.location.reload()
  };

//   getMe = (userId: string) => {
//     return this.instance
//       .get(`/users/${userId}`, {
//         headers: getAuthorizationHeader(),
//       })
//       .then((res) => {
//         return res.data;
//       });
//   };

//   uploadAvatar = (userId: string, newAvatar: File) => {
//     const formData = new FormData();
//     formData.append("file", newAvatar);
//     return this.instance
//       .post(`/users/${userId}/upload`, formData, {
//         headers: getAuthorizationHeader(),
//       })
//       .then((res) => {
//         return {
//           newAvatar: res.data.data.url,
//         };
//       });
//   };
postImage = async (currentFile: File, category: string,subCategory: string) => {
  try {
    const formData = new FormData();
    formData.append("file", currentFile, currentFile.name);
    formData.append("category", category);
    formData.append("subCategory", subCategory);

    const response = await axios.post("/v1/users/uploadImage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data; // Assuming you want to return some data from the response
  } catch (error) {
    // Handle any errors that might occur during the request
    console.error("Error uploading image:", error);
    throw error; // Rethrow the error to propagate it up the call stack
  }
  
}
}
