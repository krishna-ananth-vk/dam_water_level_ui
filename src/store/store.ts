import { TokenDataType } from '@/types/TokenDataType';
import {create} from 'zustand';
import { Store } from './types';

const useStore = create<Store>((set)=>({
    tokenData: null,
    setTokenData:  (tokenData: TokenDataType | null) => set({ tokenData }),
    isLoading: true,
    setLoading:  () => set({ isLoading: true }),
    clearLoading:  () => set({ isLoading: false }),

}))

export default useStore;
