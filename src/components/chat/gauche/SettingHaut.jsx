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
                     <div className="icon-compte">
                         <Avatar round src={account} />
                     </div>
                     <div className="nom">
                         <div className="nom-compte">
                             Tamko Clarence
                         </div>
                         <div className="nom-compte-1">
                             Your account
                         </div>
                     </div>
                 </div>
                 <div className="setting-compte-2">
                     <IconButton><SettingsOutlinedIcon/></IconButton>
                 </div>
             </div>
             <div className="active-chat">
                 <div className="active-add">
                     Active Chats
                 </div>
                 <div className="active-add-1"><IconButton><AddBoxOutlinedIcon/></IconButton></div>
             </div>
             <div className="active-chat">
                 <div className="search-bar">
                     <SearchAdd placeholder="Search people..."/>
                 </div>
             </div>
         </div>
     )
 }
}