import React from "react";

type User = {
    token: string,
    isLogged: boolean,
}


const UserContext = React.createContext({
    user: {} as User,
    login: (userObject: any) : void => {},
    logOut: () : void => {}
})

export default UserContext