import {React, Component}  from "react"
import { MapContainer, useMapEvents,Popup,Marker} from 'react-leaflet'
import L from "leaflet"
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch"
import {BasemapLayer} from "react-esri-leaflet"
import "./Map.css"
import {garbageIcon} from "./Icon"
import FadeExample from "../Slideshow/Slideshow" 
import ReactDOMServer from "react-dom/server"


let cleaned = true

class Map extends Component{
    
    render(){
        //cennter of map in first render
        const position = [41.327953, 19.819025]
        

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
                        <Marker position={position}>
                                <Popup className={cleaned ? 'image__popup-two' :'image__popup-one' }>
                                   <FadeExample cleaned={cleaned}/>

                               {cleaned ?<FadeExample cleaned={cleaned}/> : null }    
                                </Popup>
                        </Marker>
                    </MapContainer>
                </div>
        )
    }
}

export default Map
