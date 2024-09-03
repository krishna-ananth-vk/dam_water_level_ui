import { TokenDataType } from '@/types/TokenDataType';
import { functions, getBearerTokenFunctionId } from './appwrite';
import { isValidJsonString, isObjectNotEmpty } from './dataValidations';
import { addOrSubtractSeconds } from './dateUtil';
import { clearToken, getTokenData, persistToken } from './localStorage';

export const getBearerTokenForSession = async () => {
        try {
            const storedTokenData = getTokenData();
            const currentTime = new Date().getTime();
            if(isObjectNotEmpty<TokenDataType>(storedTokenData)){
                const {created_at, expires_in} = storedTokenData;

                const expire_at = addOrSubtractSeconds(new Date(created_at), expires_in).getTime();
                if(currentTime < expire_at){
                console.log('storedTokenData', {tokenData: storedTokenData});
                    return storedTokenData;
                }
            }
            const tokenDataPromise = functions.createExecution(getBearerTokenFunctionId);
            // if (isObjectValidAndNotEmpty<TokenDataType>(sessionResponse.data)) {
                // return sessionResponse.data;
            // }
            
            const tokenData = await tokenDataPromise;
            if(isValidJsonString(tokenData.responseBody)){
                const tokenToStore = JSON.parse(tokenData.responseBody);
                console.log('tokenData', {tokenData: tokenData.responseBody});
                tokenToStore.created_at = new Date().getTime();
                persistToken(tokenToStore);
                return tokenToStore;
            }
        } catch (error) {
            console.log('tokenData', {tokenData: error});
            return null;
            
        }
    
};

export const clearBearerTokenAndFetchNew = () => {
    clearToken();
    getBearerTokenForSession();
}