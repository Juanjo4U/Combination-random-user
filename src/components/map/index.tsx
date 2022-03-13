import { useJsApiLoader } from "@react-google-maps/api";
import MapComponent, { MapProps } from './map'
import MapError from "./error";

const googleMapsApiKey: string = process.env.REACT_APP_MAPS_API_KEY ?? '';

export function Map(props: MapProps) {
  const { isLoaded, loadError } = useJsApiLoader({ googleMapsApiKey });

  if (!googleMapsApiKey || loadError) return <MapError />
  return isLoaded ? <MapComponent {...props} /> : null;
}
