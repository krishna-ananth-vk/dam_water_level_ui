import { DAM_COORDINATES, Dams } from "@/utils/dams";
import { Map as MapLibreMap, Marker, Popup } from "maplibre-gl";


// add marker for dams in map
export const addMarkerForDam = (dams: Record<string,string>, map: MapLibreMap) =>{
    console.log('adding markwer for dams', {dams, map});

    Object.keys(dams).forEach(key=>{
        const aDam = key as Dams;
        const lngLat = DAM_COORDINATES[aDam];
        const marker = new Marker({color: 'red'}).setLngLat(lngLat).addTo(map);

        const label = dams[aDam];
        const popup = new Popup({ offset: 25 }).setText(label);

        marker.setPopup(popup);

    });
};