import React, {Component} from "react";
import Avatar from "@material-ui/core/Avatar";
import {IconButton} from "@material-ui/core";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import SearchAdd from "../SearchAdd";
import account from "../../icons/pexels-pixabay-459653.jpg";
import './SettingHaut.scss'

export default class SettingHaut extends Component{
 render() {
     return(
         <div className="setting-user">
             <div className="setting-compte">
                 <div className="setting-compte-1">
                     <div className="col-5 icon-compte">
                         <Avatar round src={account} />
                     </div>
                     <div className="col-9">
                         <div className="nom-compte">
                             Tamko Clarence
                         </div>
                         <div className="nom-compte-1">
                             Your account
                         </div>
                     </div>
                 </div>
                 <div></div>
                 <div>
                     <IconButton><SettingsOutlinedIcon/></IconButton>
                 </div>
             </div>
             <div className="active-chat">
                 <div className="col-6 active-add">
                     Active Chats
                 </div>
                 <div><IconButton><AddBoxOutlinedIcon/></IconButton></div>
             </div>
             <div className="active-chat">
                 <div className="col-10">
                     <SearchAdd placeholder="Search people..."/>
                 </div>
             </div>
         </div>
     )
 }
}