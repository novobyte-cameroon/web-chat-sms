import React, {Component} from 'react';
import './Message.scss';
import Menu from "./menu/Menu";
import Gauche from "./gauche/Gauche";
import Center from "./centre/Center";
import Droite from "./droite/Droite";

export default class Message1 extends Component {

    render(){
        return (
            <React.Fragment>
                <body className="body">
                <Menu/>
                <div>
                    <div className="menu-total">
                        <div className="tout gauche-total">
                            <Gauche onHandleClick={this.onClick}/>
                        </div>
                        <div className="tout centre-total">
                            <Center/>
                        </div>
                        <div className="tout droite-total">
                            <Droite/>
                        </div>
                    </div>
                </div>
                </body>
            </React.Fragment>
        );
    }
}
