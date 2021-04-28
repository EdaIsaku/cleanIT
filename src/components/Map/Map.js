import React, { Component } from "react";
import { MapContainer } from "react-leaflet";
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";
import { BasemapLayer } from "react-esri-leaflet";
import CustomMarker from "./Marker";
import Events from "./Events";
import "./Map.css";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";

let cleaned = true;
class Map extends Component {
  state = {
    markers: [],
  };

  constructor(props){
    super(props)
    //TODO
    // this.searchInput = React.createRef();

  }
  


  handleMapClick = (e) => {
    const {
      latlng: { lat, lng },
    } = e;
    this.setState((prevState) => ({
      markers: prevState.markers.concat({ lat, lng }),
    }));
  };


  render() {
    //center of map in first render
    const center = [41.327953, 19.819025];
    const { markers } = this.state;
    return (
      <div className="main__body">
        <MapContainer center={center} zoom={15} scrollWheelZoom={true}>
          <BasemapLayer name="Topographic" />
          <EsriLeafletGeoSearch
            providers={{
              arcgisOnlineProvider: {
                token:
                  "AAPK56eca1e43fa24ec7a292e2cdd06ce762Cfcy6XOKYW-VCWGCmM24T-E7l_WxtzU_vdw7b17KddOe_Z0_NGamfowgsIOjuo6A",
                label: "ArcGIS Online Results",
                maxResults: 10,
                countries: ["Al"],
              },
            }}
            useMapBounds={false}
            eventHandlers={{
              results: (r) => {
                console.log(r)
              },
            }}
            // ref= {this.searchInput}
          />
          

          <Events handleMapClick={this.handleMapClick} />
          {markers.map((e) => (
            <CustomMarker center={[e.lat, e.lng]} cleaned={cleaned} />
          ))}
        </MapContainer>
      </div>
    );
  }
}

export default Map;
