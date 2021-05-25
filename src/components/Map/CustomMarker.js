import React from "react";
import { Popup, Marker } from "react-leaflet";
import Slideshow from "../Slideshow/Slideshow";
import { redIcon, greenIcon } from "./Icons";
function CustomMarker({ center, author, cleaned, images }) {
  return (
    <Marker
      position={center}
      eventHandlers={{
        click: () => {
          console.log("marker clicked");
        },
      }}
      icon={cleaned ? greenIcon : redIcon}
    >
      <Popup className={cleaned ? "image__popup-two" : "image__popup-one"}>
        <Slideshow
          images={images}
          author={author}
          cleaned={cleaned}
          order={"first"}
        />
        {cleaned ? (
          <Slideshow
            images={images}
            author={author}
            cleaned={cleaned}
            order={"second"}
          />
        ) : null}
      </Popup>
    </Marker>
  );
}

export default CustomMarker;
