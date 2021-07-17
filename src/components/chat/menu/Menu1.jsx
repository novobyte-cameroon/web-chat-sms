import {Grid, Icon, Label} from "semantic-ui-react";
import Divider from "@material-ui/core/Divider";
import {IconButton} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React, {Component} from "react";
import './Menu1.scss'
import {connect} from "react-redux";

class Menu1 extends Component{


    onBackClick = (event) =>{
        event.preventDefault();
        const action = {
            type : "OPEN_CLOSE_USER"
        };
        this.props.dispatch(action);
    };

    render(){
        return(
            <div className="menu-principal-add">
                <div className="menu-1-add">
                    <div className="menu-11-add">
                        <div className="messenger-logo-add">
                            <Icon name="comments outline" size="huge"/>
                        </div>
                        <div className="messenger-open">
                            <Label style={{backgroundColor: 'white'}}>
                                <div className="messenger-open">
                                    Open
                                </div>
                                <i><div className="messenger-message">
                                    Messenger
                                </div></i>
                            </Label>
                        </div>
                    </div>
                    <div className="bar">
                        <Divider variant="inset"/>
                    </div>
                </div>
                <div className="menu-2-add item-center-main1">
                    <div style={{paddingLeft: '3vh', paddingTop: '3.4vh', fontSize: '2vh', opacity: '0.5'}}>Family Chat</div>
                </div>
                <div className="menu-31-add">
                    <div className="back-arrow">
                        <IconButton className="size-back-add"  style={{ backgroundColor: '#dfe3e8', color: 'white'}} onClick={this.onBackClick}>
                            <ArrowBackIcon/>
                        </IconButton>
                    </div>
                    <div className="chat-details">
                        Chat details
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Menu1)