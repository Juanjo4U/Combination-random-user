import { GoogleMapProps } from "@react-google-maps/api";

export default function MapError({ mapContainerClassName='default-map-container' }: GoogleMapProps) {
    return <div className={mapContainerClassName} >Map cannot be loaded right now, sorry.</div>;
}
