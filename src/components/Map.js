import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import "./Map.css"

class Map extends React.Component{
    render(){
        const position = [51.505, -0.09]
        return (
            <div id="mapid">
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
            </div>
        )
    }
    
}

export default Map