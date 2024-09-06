import { useEffect } from 'react';
import { getBearerTokenForSession } from '../utils/tokenUtil';
import useStore from '@/store/store';
import { Store } from '@/store/types';
import { isObjectNotEmpty } from '@/utils/dataValidations';
import { TokenDataType } from '@/types/TokenDataType';

const useMapAutherization = () => {
    const setTokenData = useStore((state: Store) => state.setTokenData);
    const setLoading = useStore((state: Store) => state.setLoading);
    const clearLoading = useStore((state: Store) => state.clearLoading);
    
    const validateSessionOrRedirect = async () => {
        setLoading();
        const sessionData = await getBearerTokenForSession();
        if(isObjectNotEmpty<TokenDataType>(sessionData)){
            setTokenData(sessionData);
        }
        clearLoading()
        console.log('bearerTokenData',{sessionData});
    };

    useEffect(() => {
        validateSessionOrRedirect();
    }, []);
};

export default useMapAutherization;
