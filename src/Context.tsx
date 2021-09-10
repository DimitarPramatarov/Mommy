import React from "react";

const UserContext = React.createContext({
    user: {},
    login: (userObject: any) : void => {},
    logOut: () : void => {}
})

export default UserContext