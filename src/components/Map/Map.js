import React, { Component } from "react";
import { MapContainer } from "react-leaflet";
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";
import { BasemapLayer } from "react-esri-leaflet";
import { connect } from "react-redux";
import CustomMarker from "./Marker";
import { showModal } from "../../redux/actions/toolsAction";
import Events from "./Events";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import "./Map.css";

let cleaned = false;
class Map extends Component {
  state = {
    markers: [],
  };

  handleMapClick = (e) => {
    const {
      latlng: { lat, lng },
    } = e;
    this.setState((prevState) => ({
      markers: prevState.markers.concat({ lat, lng }),
    }));
    this.props.showModal(true);
  };

  render() {
    //center of map in first render
    const center = [41.327953, 19.819025];
    const { markers } = this.state;
    const { addGarbage } = this.props;
    return (
      <div className='main__body'>
        <MapContainer center={center} zoom={15} scrollWheelZoom={true}>
          <BasemapLayer name='Topographic' />
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
                console.log(r);
              },
            }}
            // ref= {this.searchInput}
          />

          <Events handleMapClick={this.handleMapClick} />
          {markers.map((e) => (
            <CustomMarker center={[e.lat, e.lng]} cleaned={cleaned} />
          ))}
          {/* TODO if wanna change cursor */}
          {/* <div
            style={{
              cursor: addGarbage ? "crosshair" : "pointer",
              width: "100vw",
              height: "100vh",
            }}
          ></div> */}
        </MapContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  addGarbage: state.tools.addGarbage,
});

const mapDispatchToProps = (dispatch) => ({
  showModal: (status) => dispatch(showModal(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
