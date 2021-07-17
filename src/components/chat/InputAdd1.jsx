import React, {Component} from 'react';
import './InputAdd1.scss'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import ForumIcon from "@material-ui/icons/Forum";
import {connect} from "react-redux";

class InputAdd1 extends Component{
    initialState = {
        message : ''
    };
    state = this.initialState;

    onHandleSend = (event) =>{
        event.preventDefault();
        const action ={
            type: "MESSAGE_ENVOYE",
            value: this.state.message
        }
        this.setState({
            message : ''
        })
        this.props.dispatch(action)
    };

    onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    render() {
        const {message} = this.state;
        return (
            <>
                <div className="root-1-add" style={{borderRadius: '12vh'}}>
                    <InputBase
                        className="input"
                        placeholder="Enter your message here..." inputProps={{ 'aria-label': 'search google maps' }} value={message}
                        name = "message" onChange={this.onHandleChange} onClick={this.onHandleSend}
                    />
                    <IconButton className={"iconButton"} aria-label="search">
                        <EmojiEmotionsOutlinedIcon />
                    </IconButton>
                    <IconButton className={"iconButton"} aria-label="search">
                        <AttachFileOutlinedIcon />
                    </IconButton>
                    <IconButton style={{ backgroundColor: '#76c00d', marginRight: '1vh'}} type="submit" size="medium" color="primary" className="iconButtonSend" aria-label="directions"
                                onChange={this.onHandleChange} onClick={this.onClick}>
                        <SendOutlinedIcon />
                    </IconButton>
                </div>
            </>
        );
    }

}

export default connect()(InputAdd1)
