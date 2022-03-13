import { GoogleMap, GoogleMapProps, Marker, } from "@react-google-maps/api";
import './map.css';

export interface MapProps extends GoogleMapProps {
    withMarker?: boolean;
    coords: { lat: number; lng: number };
}

export default function Map({
    zoom = 5, coords, withMarker = false,
    mapContainerClassName = 'map'
    , ...props
}: MapProps) {
    return (
        <GoogleMap mapContainerClassName={mapContainerClassName} center={coords} zoom={zoom} {...props}>
            {withMarker && <Marker position={coords} />}
        </GoogleMap>
    );
}

