import { useEffect } from 'react';
import { getBearerTokenForSession } from '../utils/tokenUtil';
import useStore from '@/store/store';
import { Store } from '@/store/types';
import { isObjectNotEmpty } from '@/utils/dataValidations';
import { TokenDataType } from '@/types/TokenDataType';

const useMapAutherization = () => {
    const setTokenData = useStore((state: Store) => state.setTokenData);
    
    const validateSessionOrRedirect = async () => {
        const sessionData = await getBearerTokenForSession();
        if(isObjectNotEmpty<TokenDataType>(sessionData)){
            setTokenData(sessionData);
        }
        console.log('bearerTokenData',{sessionData});
    };

    useEffect(() => {
        validateSessionOrRedirect();
    }, []);
};

export default useMapAutherization;
