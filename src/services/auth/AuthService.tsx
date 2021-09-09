import axios from 'axios';
import { loginUrl, registerUrl } from '../../constants/HttpCalls';

interface User {
    userName: string,
    email: string,
    password: string
}

 export const login = (userName :string, password: string) => {

    axios.post(loginUrl,   {
        username: userName,
        password: password,
    })
  .then(function (response) {
    // handle success
    console.log(response.data.token)
  })
  .catch(function (error) {
    // handle error
    console.warn(error);
  })
  .then(function () {
    // always executed
  });
}

 export const register = (userName :string, password: string, email:string) => {

    axios.post(registerUrl,   {
        username: userName,
        password: password,
        email: email,
    })
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.warn(error);
  })
  .then(function () {
    // always executed
  });
}


const AuthService = {
    login,
    register,
}

export default AuthService;