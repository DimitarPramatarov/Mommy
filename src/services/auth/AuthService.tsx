import axios from 'axios';
import { loginUrl, registerUrl } from '../../constants/HttpCalls';

  export const login = async (username :string, password: string) : Promise<string>=> {

    let token = "";
    console.log(username);
    console.log(password);
      await axios.post<any>(loginUrl,  
        {
          headers:{
            "Accept" : "*/*",
            "Conent-Type" : "application/json",
            "Connection" : "keep-alive"
          },
          username: username,
          password: password,
    })
  .then(await function (response)  {
    // handle success
      token = response.data;
      
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