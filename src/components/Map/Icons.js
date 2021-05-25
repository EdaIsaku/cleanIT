import L from "leaflet";
import RedIcon from "../../assets/garbbage.png";
import GreenIcon from "../../assets/cleaned.png";

const redIcon = L.icon({
  iconUrl: RedIcon,
  iconSize: [60, 49],
  iconAnchor: [30, 49],
  popupAnchor: [0, -100],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});
const greenIcon = L.icon({
  iconUrl: GreenIcon,
  iconSize: [60, 56],
  iconAnchor: [30, 56],
  popupAnchor: [15, -100],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

export { redIcon, greenIcon };
