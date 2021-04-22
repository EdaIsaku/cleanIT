import React from "react"
import { MapContainer, TileLayer, LayersControl,Marker, Popup} from 'react-leaflet'
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch";
import {
    BasemapLayer,FeatureLayer
  } from "react-esri-leaflet";

import "./Map.css"
class Map extends React.Component{
  


    render(){
        const position = [41.327953, 19.819025]
        return (
           
                <div className="main__body">
                    <MapContainer  center={position} zoom={17} scrollWheelZoom={true}>
                    <BasemapLayer name="Topographic" />
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
                                
                    </MapContainer>
                </div>
        )
    }
}

export default Map