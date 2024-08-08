import useMapAutherization from "./hooks/useMapAutherization";
import { isObjectValidAndNotEmpty } from "./utils/dataValidations";
import MapContainer from "./Containers/MapContainer/MapContainer";
import { Store } from "./store/types";
import useStore from "./store/store";

const AppContainer = () => {

    useMapAutherization();
    const tokenData = useStore((state: Store) => state.tokenData);

    return (
        <div className="min-h-screen bg-slate-500">
            {
                isObjectValidAndNotEmpty(tokenData) &&
                <MapContainer />
            }

        </div>
    );

}

export default AppContainer;