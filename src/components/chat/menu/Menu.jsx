import {Grid, Icon, Label} from "semantic-ui-react";
import Divider from "@material-ui/core/Divider";
import {IconButton} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React, {Component} from "react";
import './Menu.scss'
import {connect} from "react-redux";

class Menu extends Component{

    onBackClick = (event) =>{
        event.preventDefault();
        const action = {
            type : "OPEN_CLOSE_USER"
        };
        this.props.dispatch(action);
    };

    render(){
        return(
            <div className="menu-principal">
                <div className="menu-1">
                    <div className="menu-11">
                        <div className="messenger-logo">
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
                <div className="menu-2">
                    <div style={{paddingLeft: '3vh', paddingTop: '3.4vh', fontSize: '2vh', opacity: '0.5'}}>Family Chat</div>
                </div>
                <div className="menu-3">
                    <IconButton style={{ backgroundColor: '#dfe3e8', color: 'white'}} className="size-back" onClick={this.onBackClick}><ArrowForwardIcon/></IconButton>
                </div>
            </div>
        )
    }
}

export default connect()(Menu)