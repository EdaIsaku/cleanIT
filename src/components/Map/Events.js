import { useMapEvents,useMapEvent } from 'react-leaflet';


function Events({handleMapClick}) {
    const map = useMapEvent('click', (e) => {
        handleMapClick(e)
    })
    return null
  }

  export default Events