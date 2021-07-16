import React, {Component} from 'react';
import './Message.scss';
import Menu from "./menu/Menu";
import Menu1 from "./menu/Menu1";
import Gauche from "./gauche/Gauche";
import Center from "./centre/Center";
import Droite from "./droite/Droite";
import Droite1 from "./droite/Droite1";
import {connect} from "react-redux";

const mapStateToProps = (state)=>{
    return {
        infoContact: state.notification.infoContact
    }
};

class Message1 extends Component {

    render(){
        const {infoContact} = this.props;
        return (
            <React.Fragment>
                <body className="body">
                    {infoContact ? <Menu1/> : <Menu/>}
                    <div>
                        <div className="menu-total">
                            <div className={infoContact ? "gauche-total-add":"gauche-total"}>
                                <Gauche onHandleClick={this.onClick}/>
                            </div>
                            <div className={"centre-total " + (infoContact ? "width-centre-add":"width-centre")}>
                                <Center/>
                            </div>
                            <div className={infoContact ? "droite-total-add":"droite-total"}>
                                {infoContact ? <Droite1/> : <Droite/>}
                            </div>
                        </div>
                    </div>
                </body>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(Message1)
