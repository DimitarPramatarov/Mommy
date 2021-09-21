import * as SecureStore from 'expo-secure-store';

interface UserToken  {
    readonly tokenKey: string;
    tokenValue: string;
}

const userToken: UserToken = {tokenKey: 'token', tokenValue: ''}

export const setJwt = async (token: string) : Promise<void> => {

    userToken.tokenValue = token;
    await SecureStore.setItemAsync(userToken.tokenKey, userToken.tokenValue);
}


export const getJwt = async () : Promise<string> => {
    const getUserToken = await SecureStore.getItemAsync(userToken.tokenKey);

    if(getUserToken != null)
    {
        return getUserToken
    }

    return  '';
}


const JwtService = {
    setJwt,
    getJwt,
}

export default JwtService;
