import axios from 'axios';
import { loginUrl, registerUrl } from '../../constants/HttpCalls';

  export const login = async (username :string, password: string) : Promise<string>=> {

    let token = "";
      await axios.post<any>(loginUrl,   {
        username: username,
        password: password,
    })
  .then(await function (response)  {
    // handle success
      token = response.data.token;
      
  })
  .catch(function (error) {
    // handle error
    console.warn(error);
  })

  return token
}

 export const register = async (username :string, email: string, password: string) => {
    await axios.post(registerUrl,   {
        username: username,
        email: email,
        password: password,
    })
  .then(function (response) : string {
    // handle success\
    return response.data;
  })
  .catch(function (error) {
    // handle error
    console.warn(error);
  })
}


const AuthService = {
    login,
    register,
}

export default AuthService;