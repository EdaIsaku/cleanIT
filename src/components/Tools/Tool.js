import "./Tools.css"
import image from '../../assets/bgImg.jpg'

function Tool () {
    return (
        <div>

            <img className="tool__icon" src={image} alt="img"></img>

            <img className="tool__icon" src="../../assets/bgImg.jpg" alt="img"></img>

        </div>
    )
}

export default Tool