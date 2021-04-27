import {React, Component}  from "react"
import { MapContainer, useMapEvents,Popup,Marker, MapConsumer} from 'react-leaflet'
import EsriLeafletGeoSearch from "react-esri-leaflet/plugins/EsriLeafletGeoSearch"
import {BasemapLayer} from "react-esri-leaflet"
import "./Map.css"
import FadeExample from "../Slideshow/Slideshow" 

let cleaned = true

class Map extends Component{
    constructor(props) {
        super(props);
        this.state = {
          currentPos: null
        };
        console.log(this.state)
        this.handleClick = this.handleClick.bind(this);
      }
   

      handleClick(e){
        this.setState({ currentPos: e.latlng });
        console.log(this.currentPos)
      }

    
    render(){
        //cennter of map in first render
        const center = [41.327953, 19.819025]
        
        return (
                <div className="main__body" >
                    <MapContainer  center={center} zoom={11} scrollWheelZoom={true}>
                    <MapConsumer>
        {(map) => {
          console.log('map center:', map.getCenter())
          return null
        }}
      </MapConsumer>
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
                       { this.state.currentPos && <Marker position={center} eventHandlers={{click: () => {console.log('marker clicked')},}}>
                                <Popup className={cleaned ? 'image__popup-two' :'image__popup-one' }>
                                    <FadeExample cleaned={cleaned} order={'first'}/>

                                     {cleaned ?<FadeExample cleaned={cleaned} order={'second'}/> : null }    
                                </Popup>
                        </Marker>}
                    </MapContainer>
                </div>
        )
    }
}

export default Map