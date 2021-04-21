import React from "react"
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

import "./Map.css"

class Mymap extends React.Component{
    render(){
        const position = [41.327953, 19.819025]
        return (
            <div className="app">
                <div className="app__header">
                    <div className="app__header__tools">TOOLS</div>
                    <div className="app__header__profile">PROFILE</div>
                </div>
                <div className="app__body">
                    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        )
    }
}

export default Mymap