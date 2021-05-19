import { useMapEvent } from "react-leaflet";

function Events({ handleMapClick }) {
  const map = useMapEvent("click", (e) => {
    handleMapClick(e);
    //if needed to move map
    // map.flyTo(e.latlng, map.getZoom());
  });
  return null;
}

export default Events;
