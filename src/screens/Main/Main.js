import React, {Component} from "react"

import Map from '../../components/Map/Map'
import User from '../../components/User/User'
import Tools from '../../components/Tools/Tools'

import "./Main.css"

class Main extends Component{
    render(){
        return (
            <div className="main">
               <User />
               <Tools />
                <Map />
            </div>
        )
    }
}

export default Main