import React, {Component} from "react";
import {Grid} from "semantic-ui-react";
import {IconButton} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LocalPhoneOutlinedIcon from "@material-ui/icons/LocalPhoneOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import InsertPhotoOutlinedIcon from "@material-ui/icons/InsertPhotoOutlined";
import TheatersOutlinedIcon from "@material-ui/icons/TheatersOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import account from '../../icons/pexels-pixabay-459653.jpg'
import './Droite.scss'
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return {
        infoContact: state.notification.infoContact
    }
};

class Droite extends Component{
    initialState = {
        size: 'medium',
    };

    state = this.initialState;

    render() {
        const {size} = this.state;
        const {infoContact} = this.props;
        return(
            <>
                <div className="droite">
                    <div className={"droite-1 "+(infoContact ? "" : "hide")}>
                        <Avatar size={size} round src={account} />
                    </div>
                    <div className="droite-2">
                        <IconButton size={size} style={{ backgroundColor: '#76c00d'}} className="item-user"><LocalPhoneOutlinedIcon style={{color: 'white'}}/></IconButton>
                    </div>
                    <div className="droite-3">
                        <IconButton size={size} style={{ backgroundColor: '#d03e13'}} className="item-user"><VideocamOutlinedIcon style={{color: 'white'}}/></IconButton>
                    </div>
                    <div className={"droite-4 "+(infoContact ? "" : "hide")}>
                        User
                    </div>
                    <div className={"droite-5 "+(infoContact ? "" : "hide")}>
                        <Avatar size={size} round src={account}/>
                    </div>
                    <div className="droite-6">
                        Files
                    </div>
                    <div className="droite-7">
                        <IconButton size={size} style={{ backgroundColor: '#e7ebed'}} className="item-user"><DescriptionOutlinedIcon style={{opacity: '0.4'}}/></IconButton>
                    </div>
                    <div className="droite-8">
                        <IconButton size={size} style={{ backgroundColor: '#e7ebed'}} className="item-user"><InsertPhotoOutlinedIcon style={{opacity: '0.4'}}/></IconButton>
                    </div>
                    <div className="droite-9">
                        <IconButton size={size} style={{ backgroundColor: '#e7ebed'}} className="item-user"><TheatersOutlinedIcon style={{opacity: '0.4'}}/></IconButton>
                    </div>
                    <div className="droite-10">
                        <IconButton style={{ backgroundColor: '#e7ebed'}} className="item-user"><InsertDriveFileOutlinedIcon style={{opacity: '0.4'}}/></IconButton>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps)(Droite);