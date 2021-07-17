import React, {Component} from 'react'
import './TextMessage.scss'
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        textSend: state.messageGet.messageSend
    }
}

const messageTabs = [];

class TextMessage extends Component {

    messageTab = () =>{
        if (this.props){
            messageTabs.push(mapStateToProps)
        }

    }
    render() {
        const {textSend} = this.props;
        return (
            <div>
            { !textSend.length ? " " :
                    <div className="texto">
                        <div className="photo">
                            <div className="image-send"></div>
                        </div>
                        <p className="message-send">{textSend}</p>
                    </div>
            }
            </div>

        )
    }
}

export default connect(mapStateToProps)(TextMessage)
