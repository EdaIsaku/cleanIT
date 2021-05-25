import React, { Component } from "react";
import { MapContainer } from "react-leaflet";
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";
import { BasemapLayer } from "react-esri-leaflet";
import { connect } from "react-redux";
import CustomMarker from "./CustomMarker";
import { showModal } from "../../redux/actions/toolsAction";
import Events from "./Events";
import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";
import "./Map.css";
import Bin from "../../assets/garbbage.png";
import Markers from "../../data";
import { uniqueId } from "../../utils";
import { displayUserName } from "../../utils/index";

class Map extends Component {
  state = {
    markers: [],
  };

  componentDidMount() {
    this.setState({
      markers: Markers,
    });
  }

  handleMapClick = (e) => {
    if (this.props.addGarbage) {
      const {
        latlng: { lat, lng },
      } = e;
      this.setState((prevState) => ({
        markers: prevState.markers.concat({
          id: uniqueId("id_"),
          author: " displayUserName(author)",
          images: [
            "https://api.time.com/wp-content/uploads/2021/03/trash-pandemic-covid-19-01.jpg",
            "https://image.shutterstock.com/image-photo/closeup-portrait-yong-woman-casual-260nw-1554086789.jpg",
            "https://api.time.com/wp-content/uploads/2021/03/trash-pandemic-covid-19-01.jpg",
          ],
          location: {
            lat,
            lng,
          },
          cleaned: false,
        }),
      }));
      this.props.showModal(true);
    } else {
      return null;
    }
  };

  render() {
    //center of map in first render
    const center = [41.327953, 19.819025];
    const { markers } = this.state;
    const { addGarbage } = this.props;
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
                console.log(r);
              },
            }}
            // ref= {this.searchInput}
          />

          <Events handleMapClick={this.handleMapClick} />
          {markers.map((e) => (
            <CustomMarker
              key={e.id}
              center={[e.location.lat, e.location.lng]}
              cleaned={e.cleaned}
              images={e.images}
              author={e.author}
            />
          ))}

          <div
            className="dummyDivForCursor"
            style={{
              cursor: addGarbage ? `url(${Bin}),auto` : "pointer",
              width: "100vw",
              height: "100vh",
            }}
          ></div>
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
