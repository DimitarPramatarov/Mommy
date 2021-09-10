import axios from 'axios';
import { loginUrl, registerUrl } from '../../constants/HttpCalls';


  export const login =  async (username :string, password: string)  => {

    await axios.post(loginUrl,   {
        username: username,
        password: password,
    })
  .then(function (response) : string {
    // handle success
    return response.data.token
  })
  .catch(function (error) {
    // handle error
    console.warn(error);
  })
  .then(function () {
    // always executed
  });
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
  .then(function () {
    console.log("response");
  });
}


const AuthService = {
    login,
    register,
}

export default AuthService;