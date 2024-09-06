import useMapAutherization from "./hooks/useMapAutherization";
import { isObjectNotEmpty } from "./utils/dataValidations";
import { Store } from "./store/types";
import useStore from "./store/store";
import DataContainer from "./Containers/DataContainer/DataContainer";
import Loader from "./Containers/Loader/loader";
import { Button } from "./components/ui/button";

const AppContainer = () => {

    useMapAutherization();
    const tokenData = useStore((state: Store) => state.tokenData);

    return (
        <div className="min-h-screen bg-background dark:bg-slate-800">

            <div className="flex-1 space-y-4 p-8 pt-6">
                {/* Title part */}
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight dark:text-white">
                        Kerala Dams
                    </h2>
                    <Button>
                        Do something
                    </Button>
                </div>



                {/* Main part */}
                <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <div className="rounded-xl border bg-card text-card-foreground shadow col-span-5" style={{ height: '80vh' }}>
                            {
                                isObjectNotEmpty(tokenData) &&
                                <DataContainer />
                            }
                        </div>
                        <div className="rounded-xl border bg-card text-card-foreground shadow col-span-2">

                        </div>
                    </div>

                </div>
            </div>
            <Loader />


        </div>
    );

}

export default AppContainer;