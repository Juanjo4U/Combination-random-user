import { useJsApiLoader } from "@react-google-maps/api";
import MapComponent, { MapProps } from './map'
import MapError from "./error";
import './map.css';

const googleMapsApiKey: string = process.env.REACT_APP_MAPS_API_KEY ?? '';

export function Map({ mapContainerClassName = 'default-map-container', ...props }: MapProps) {
  const { isLoaded, loadError } = useJsApiLoader({ googleMapsApiKey });

  if (!googleMapsApiKey || loadError) return <MapError mapContainerClassName={mapContainerClassName} />
  return isLoaded ? <MapComponent mapContainerClassName={mapContainerClassName} {...props} /> : null;
}
