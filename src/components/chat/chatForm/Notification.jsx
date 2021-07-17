import React, {Component} from "react";
import './Notification.scss'
import account from "../../icons/pexels-pixabay-459653.jpg";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import {connect} from "react-redux";
import {IconButton} from "@material-ui/core";
import SettingsOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";

const mapStateToProps = (state)=>{
    return state
};

class Notification extends Component{
    state = {
        open: false,
        nb : 4,
        user: undefined,
        infoContact: false
    };

    onHandleOpen=(event)=>{
        event.preventDefault();
        this.setState({
            open : true,
            nb : 0,
        })
        const action = {
            type: "OPEN_USER",
        };
        this.props.dispatch(action);
    };

    render() {
        const {open, nb} = this.state;
        return (
            <>
                <div className={"user-notification "+ (open ? "back" : "")} onClick={this.onHandleOpen}>
                    <div className="user-notification-1">
                        <div className="icon-size-1">
                            <Avatar round src={account} className="icon-size"/>
                        </div>
                        <div className="nom-chat">
                            <div className="nom-user">
                                Tamko Clarence
                            </div>
                            <div className="nom-user-1">
                                Your account
                            </div>
                        </div>
                    </div>
                    <div className="user-notification-2">
                        <Badge badgeContent={nb} color="error"/>
                    </div>
                </div>

            </>
        );
    }

}

export default connect(mapStateToProps)(Notification)