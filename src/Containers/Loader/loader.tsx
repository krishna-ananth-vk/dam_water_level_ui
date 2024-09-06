import useStore from "@/store/store";
import { Store } from "@/store/types";
import './loader.css'

const Loader = () => {

    const isLoading = useStore((state: Store) => state.isLoading);

    return (
        isLoading && (
            <div className="absolute inset-0 bg-background/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center space-y-4">
                    <span className="loader"></span>
                </div>
            </div>
        )
    );
}

export default Loader;