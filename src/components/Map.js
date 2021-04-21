import React from "react"
import { MapsComponent, LayersDirective, LayerDirective } from '@syncfusion/ej2-react-maps';
// import { MapsComponent} from '@syncfusion/ej2-react-maps';

import "./Map.css"

class Map extends React.Component{
        render() {
             return (
               // <div id="container"> <MapsComponent/> </div>
            <MapsComponent id="maps">
                <LayersDirective>
                    <LayerDirective layerType='OSM'/>
                </LayersDirective>
            </MapsComponent>, document.getElementById("maps"));
        }
}

export default Map