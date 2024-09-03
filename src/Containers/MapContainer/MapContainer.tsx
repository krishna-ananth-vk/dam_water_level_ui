import { useState, useEffect } from "react";
import { Map as MapLibreMap, NavigationControl } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";
import useStore from "@/store/store";
import { Store } from "@/store/types";
import { OLA_MAPS_API_KEY } from "@/utils/appwrite";
import { addMarkerForDam } from "./MapContainerUtils";
import { DAM_NAMES } from "@/utils/dams";
import { clearBearerTokenAndFetchNew } from "@/utils/tokenUtil";

const MapContainer = () => {


    const [mapReady, setMapReady] = useState(false);
    // const tokenData = getToken();
    const tokenData = useStore((state: Store) => state.tokenData);

    const mapApiCallErrorHandler = (error: unknown) => {
        console.log('MapApiFailed', { error });
        clearBearerTokenAndFetchNew();
    }

    useEffect(() => {
        if (!mapReady) return;
        console.log('datainMap', { tokenData });
        const map = new MapLibreMap({
            container: "central-map",
            center: [76.0, 10.0],
            zoom: 15,
            bounds: [
                [76.0, 8.0],  // Southwest coordinates
                [77.5, 13.0]  // Northeast coordinates
            ],
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

        map.on('error', (error) => mapApiCallErrorHandler(error));

        addMarkerForDam(DAM_NAMES, map);

        // add dam locations

    }, [mapReady]);

    return (
        <div
            className="rounded-xl border"
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
            ref={() => setMapReady(true)}
            id="central-map"
        />
    );

}

export default MapContainer;