import React, {Component} from "react";
import {Grid, Label} from "semantic-ui-react";
import Avatar from "@material-ui/core/Avatar";
import {IconButton} from "@material-ui/core";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import SearchAdd from "../SearchAdd";
import AvatarUser from "../chatForm/AvatarUser";
import './Gauche.scss'
import SettingHaut from "./SettingHaut";
import account from "../../icons/pexels-pixabay-459653.jpg";
import Notification from "../chatForm/Notification";

export default class Gauche extends Component{

    onHandleClick = (event)=>{
        this.props.onHandleClick(this.props)
        console.log(this.props)
    };

    render() {
        return(
            <div className="gauche">
                <SettingHaut/>
                <div className="navigation-scroll">
                    <div>
                        <Notification onHandleClick={this.onHandleClick}/>
                    </div>
                </div>
            </div>
        )
    }
}