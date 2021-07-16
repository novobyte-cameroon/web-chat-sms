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

    onClick=(event)=>{
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
                <div className={"user-notification "+ (open ? "back" : "")} onClick={this.onClick}>
                    <div className="user-notification-1">
                        <div className="col-5">
                            <Avatar round src={account} className="icon-size"/>
                        </div>
                        <div className="col-9">
                            <div className="nom-user">
                                Tamko Clarence
                            </div>
                            <div className="nom-user-1">
                                Your account
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div>
                        <Badge badgeContent={nb} color="error" style={{marginLeft: '-3vh'}}>
                        </Badge>
                    </div>
                </div>

            </>
        );
    }

}

export default connect(mapStateToProps)(Notification)