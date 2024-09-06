import { TokenDataType } from "@/types/TokenDataType";

export interface Store {
    tokenData: TokenDataType | null,
    setTokenData: (token: TokenDataType) => void,
    isLoading: boolean,
    setLoading: ()=>void,
    clearLoading: ()=>void,
   
}
