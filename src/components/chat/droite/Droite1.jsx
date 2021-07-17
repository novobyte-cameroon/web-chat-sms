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
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import PhoneDisabledIcon from '@material-ui/icons/PhoneDisabled';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import account from '../../icons/pexels-pixabay-459653.jpg'
import './Droite1.scss'
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return {
        infoContact: state.notification.infoContact
    }
};

class Droite1 extends Component{
    initialState = {
        size: 'medium',
    };

    state = this.initialState;

    render() {
        const {size} = this.state;
        const {infoContact} = this.props;
        return(
            <>
                <div className="droite-add">
                    <div className="droite-1-add">
                        <div className="image-profil"></div>
                        <div className="group-name">
                            <div className="group-name-1">Family chat</div>
                            <div style={{opacity:'0.7', color: 'gray'}}>3 members</div>
                            <div className="today">Last message: Today 09:56</div>
                        </div>
                        <div style={{backgroundColor:'#f4f5f8', height: '4vh', width: '4vh', borderRadius: '0.7vh', padding: '0.4vh'}}>
                            <CreateOutlinedIcon/>
                        </div>
                    </div>
                    <div className="phone-add">
                        <div className="droite-2-add" style={{ backgroundColor: '#76c00d'}}>
                            <div style={{width: '10%'}}>
                                <LocalPhoneOutlinedIcon style={{color: 'white'}}/>
                            </div>
                            <div style={{width: '55%'}} className="voice">Voice chat</div>
                        </div>
                        <div className="droite-3-add" style={{ backgroundColor: '#d03e13'}}>
                            <div style={{width: '10%'}}>
                                <VideocamOutlinedIcon style={{color: 'white'}}/>
                            </div>
                            <div style={{width: '55%'}} className="video">
                                Video call
                            </div>
                        </div>
                    </div>
                    <div className="droite-4-add">
                        <div className="call-history">
                            Call History
                        </div>
                        <div className="add-items">
                            <div className="add-user">
                                <PersonAddOutlinedIcon className="button-add-user"/>
                            </div>
                            <div className="add-down">
                                <ArrowDropDownOutlinedIcon className="button-add-down"/>
                            </div>
                        </div>
                    </div>
                    <div className="droite-5-add">
                        <div className="droite-5-add-1">
                            <div>
                                <Avatar size={size} round src={account} />
                            </div>
                            <div style={{marginLeft: '1vh'}}>
                                Tamko Clarence
                            </div>
                        </div>
                        <div>
                            <PhoneDisabledIcon style={{color: 'red'}}/>
                        </div>
                    </div>
                    <div className="droite-5-add">
                        <div className="droite-5-add-1">
                            <div>
                                <Avatar size={size} round src={account} />
                            </div>
                            <div style={{marginLeft: '1vh'}}>
                                Tamko Clarence
                            </div>
                        </div>
                        <div>
                            <PhoneCallbackIcon style={{color: 'green'}}/>
                        </div>
                    </div>
                    <div className="droite-5-add">
                        <div className="droite-5-add-1">
                            <div>
                                <Avatar size={size} round src={account} />
                            </div>
                            <div style={{marginLeft: '1vh'}}>
                                Tamko Clarence
                            </div>
                        </div>
                        <div>
                            <PhoneForwardedIcon style={{color: 'blue'}}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(mapStateToProps)(Droite1);