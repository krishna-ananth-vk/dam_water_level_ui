import { useState, useEffect } from "react";
import { Map as MapLibreMap, NavigationControl } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";
import useStore from "@/store/store";
import { Store } from "@/store/types";
import { OLA_MAPS_API_KEY } from "@/utils/appwrite";

const MapContainer = () => {


    const [mapReady, setMapReady] = useState(false);
    // const tokenData = getToken();
    const tokenData = useStore((state: Store) => state.tokenData);

    useEffect(() => {
        if (!mapReady) return;
        console.log('datainMap', { tokenData });
        const map = new MapLibreMap({
            container: "central-map",
            center: [0, 0],
            zoom: 0,
            style: "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
            transformRequest: (url, resourceType) => {
                url = url + `?api_key=${OLA_MAPS_API_KEY}`;
                return { url, resourceType, headers: { Authorization: `Bearer ${tokenData?.access_token}` } };
            },
        });

        const nav = new NavigationControl({
            visualizePitch: true,
        });
        map.addControl(nav, "top-left");
    }, [mapReady]);

    return (
        <div
            style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
            ref={() => setMapReady(true)}
            id="central-map"
        />
    );

}

export default MapContainer;