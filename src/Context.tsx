import React from "react";

type User = {
    token: string,
    isLogged: boolean,
    userName: string,
}


const UserContext = React.createContext({
    user: {} as User,
    login: (userObject: any) : void => {},
    logOut: () : void => {}
})

export default UserContext