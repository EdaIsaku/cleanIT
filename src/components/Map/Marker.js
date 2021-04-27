
import React from 'react'

import { Popup,Marker } from 'react-leaflet';
import FadeExample from '../Slideshow/Slideshow'

function CustomMarker({center,cleaned}){
    return(

        <Marker position={center} eventHandlers={{click: () => {console.log('marker clicked')},}}>
                                <Popup className={cleaned ? 'image__popup-two' :'image__popup-one' }>
                                    <FadeExample cleaned={cleaned} order={'first'}/>
                                     {cleaned ?<FadeExample cleaned={cleaned} order={'second'}/> : null }    
                                </Popup>
             </Marker>
    )
}



export default CustomMarker


