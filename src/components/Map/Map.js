import {React, Component}  from "react"
import { MapContainer, useMapEvents} from 'react-leaflet'
import L from "leaflet"
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch"
import {BasemapLayer} from "react-esri-leaflet"
import "./Map.css"
import {garbageIcon} from "./Icon"

class Map extends Component{
    
    render(){
        //cennter of map in first render
        const position = [41.327953, 19.819025]
        
        function LocationMarker() {
            const map = useMapEvents({
                click: (e) => {
                    const { lat, lng } = e.latlng;
                    var popup = L.popup().setContent(`${lat}  ${lng}`);
                    L.marker([lat, lng], {icon: garbageIcon}).addTo(map).bindPopup(popup);
                    // map.flyTo(e.latlng, map.getZoom())
              }
            });
            return null;
          }

        return (
                <div className="main__body" >
                    <MapContainer  center={position} zoom={11} scrollWheelZoom={true}>
                    <BasemapLayer name="Topographic"  />
                       <EsriLeafletGeoSearch 
                            providers={{
                                arcgisOnlineProvider: {
                                    token: 'AAPK56eca1e43fa24ec7a292e2cdd06ce762Cfcy6XOKYW-VCWGCmM24T-E7l_WxtzU_vdw7b17KddOe_Z0_NGamfowgsIOjuo6A',
                                    label: "ArcGIS Online Results",
                                    maxResults: 10,
                                    countries:['Al']
                                    }
                                }}
                            useMapBounds={false}
                            eventHandlers={{
                                results: (r) => {console.log(r);}
                            }}
                        />;
                        <LocationMarker />
                    </MapContainer>
                </div>
        )
    }
}

export default Map
