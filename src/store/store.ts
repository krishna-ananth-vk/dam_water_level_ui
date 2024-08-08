import { TokenDataType } from '@/types/TokenDataType';
import {create} from 'zustand';
import { Store } from './types';

const useStore = create<Store>((set)=>({
    tokenData: null,
    setTokenData:  (tokenData: TokenDataType | null) => set({ tokenData }),
}))

export default useStore;
