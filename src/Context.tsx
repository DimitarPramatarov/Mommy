import React from "react";

const UserContext = React.createContext({
    user: {},
    login: () => {},
    logOut: () => {}
})

export default UserContext