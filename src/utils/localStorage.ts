import { TokenDataType } from "@/types/TokenDataType";
import { isValidJsonString } from "./dataValidations";

const TOKEN_DATA = 'token_data';

export const persistToken = (tokenData: TokenDataType) => {
    localStorage.setItem(TOKEN_DATA, JSON.stringify(tokenData));
};


export const getTokenData = (): TokenDataType|null => {
    const storedTokenData = localStorage.getItem(TOKEN_DATA);
    let loginState : TokenDataType|null = null;
    if (storedTokenData && isValidJsonString(storedTokenData)) {
        loginState = JSON.parse(storedTokenData);
    }
    return loginState;
};
