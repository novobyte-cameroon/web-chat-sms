import React, {Component} from "react";
import {Grid} from "semantic-ui-react";
import Avatar from "@material-ui/core/Avatar";
import './AvatarUser.scss'
import { Image } from 'semantic-ui-react'
import logo from '../../icons/logo.svg'
import pp from '../../icons/pexels-pixabay-459653.jpg'
import 'bootstrap/scss/bootstrap.scss'

export default class AvatarUser extends Component{
    render() {
        return(
            <>
                <Grid>
                    <Grid.Row>
                        <div className="container image-pp">
                            <div className="row justify-content-start">
                                <div className="col-2"></div>
                                <div className="col-2 justify-content-end">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </div>
                                <div className="col-8 justify-content-start marge-pp">
                                    <div className="user-chat-label">
                                        <div style={{fontWeight: 'bold', fontSize: '2vh'}}>
                                            Tamko Clarence
                                        </div>
                                        <i><div style={{marginTop: '0.5vh', color: 'gray', fontSize: '1.75vh'}}>
                                            Messenger
                                        </div></i>
                                    </div>
                                </div>
                                <div className="col-2"></div>
                            </div>

                        </div>
                    </Grid.Row>
                </Grid>
            </>
        );
    }
}