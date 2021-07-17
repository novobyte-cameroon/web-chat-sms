import React, {Component} from "react";
import TextMessage from "../formMessage/TextMessage";
import InputAdd from "../InputAdd";
import InputAdd1 from "../InputAdd1";
import './Center.scss'
import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return {
        infoContact: state.notification.infoContact
    }
};

class Center extends Component{
    render() {
        const {infoContact} = this.props
        return (
            <div className="input-center">
                <TextMessage/>
                <TextMessage/>
                {infoContact ? <InputAdd1/> : <InputAdd/>}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Center)