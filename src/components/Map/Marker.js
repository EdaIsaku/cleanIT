import React from "react";

import { Popup, Marker } from "react-leaflet";
import Slideshow from "../Slideshow/Slideshow";

function CustomMarker({ center, cleaned }) {
  return (
    <Marker
      position={center}
      eventHandlers={{
        click: () => {
          console.log("marker clicked");
        },
      }}
    >
      <Popup className={cleaned ? "image__popup-two" : "image__popup-one"}>
        <Slideshow cleaned={cleaned} order={"first"} />
        {cleaned ? <Slideshow cleaned={cleaned} order={"second"} /> : null}
      </Popup>
    </Marker>
  );
}

export default CustomMarker;
