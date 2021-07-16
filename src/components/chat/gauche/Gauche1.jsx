import React, {Component} from "react";
import {Grid, Label} from "semantic-ui-react";
import Avatar from "@material-ui/core/Avatar";
import {IconButton} from "@material-ui/core";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import SearchAdd from "../SearchAdd";
import AvatarUser from "../chatForm/AvatarUser";

export default class Gauche1 extends Component{
    render() {
        return(
            <Grid.Column width={4}>
                <Grid columns={3}>
                    <Grid.Row className="user-main-dive">
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={2}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </Grid.Column>
                        <Grid.Column width={10} className="user-info">
                            <Label style={{marginTop: '-1vh', backgroundColor: 'white'}}>
                                <div style={{opacity: '0.3', color: 'gray', fontWeight: 'bold', fontSize: '2vh', align: 'right', backgroundColor: 'white'}}>
                                    Tamko Clarence
                                </div>
                                <i><div style={{opacity: '0.5', backgroundColor: 'white', marginTop: '1vh'}}>
                                    Your account
                                </div></i>
                            </Label>
                        </Grid.Column>
                        <Grid.Column width={1}><IconButton><SettingsOutlinedIcon/></IconButton></Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={12} className="user-info">
                            <Label style={{ backgroundColor: 'white', marginTop: '1vh'}}>
                                <div style={{opacity: '0.7', color: 'black', fontSize: '2vh', backgroundColor: 'white'}}>
                                    Active Chats
                                </div>
                            </Label>
                        </Grid.Column>
                        <Grid.Column width={1}><IconButton><AddBoxOutlinedIcon/></IconButton></Grid.Column>
                        <Grid.Column width={1}></Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={14} className="user-info">
                            <SearchAdd placeholder="Search people..."/>
                        </Grid.Column>
                        <Grid.Column width={1}></Grid.Column>
                    </Grid.Row>
                    <div className="user-chat-scroll">
                        <Grid columns={2}>
                            <Grid.Row>
                                <AvatarUser/>
                            </Grid.Row>
                            <Grid.Row className="user-chat" onClick={this.onClick}>
                                <Grid.Column width={1}></Grid.Column>
                                <Grid.Column width={2}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </Grid.Column>
                                <Grid.Column width={10} className="user-info">
                                    <div style={{marginTop: '-0.7vh'}}>
                                        <div style={{opacity: '0.2', fontWeight: 'bold', fontSize: '2vh'}}>
                                            Open
                                        </div>
                                        <i><div style={{opacity: '0.5', marginTop: '0.5vh', color: 'gray', fontSize: '1.75vh'}}>
                                            Messenger
                                        </div></i>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row className="user-chat" onClick={this.onClick}>
                                <Grid.Column width={1}></Grid.Column>
                                <Grid.Column width={2}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </Grid.Column>
                                <Grid.Column width={10} className="user-info">
                                    <div style={{marginTop: '-0.7vh'}}>
                                        <div style={{opacity: '0.2', fontWeight: 'bold', fontSize: '2vh'}}>
                                            Open
                                        </div>
                                        <i><div style={{opacity: '0.5', marginTop: '0.5vh', color: 'gray', fontSize: '1.75vh'}}>
                                            Messenger
                                        </div></i>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row className="user-chat" onClick={this.onClick}>
                                <Grid.Column width={1}></Grid.Column>
                                <Grid.Column width={2}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </Grid.Column>
                                <Grid.Column width={10} className="user-info">
                                    <div style={{marginTop: '-0.7vh'}} className="user-chat-label">
                                        <div style={{opacity: '0.2', fontWeight: 'bold', fontSize: '2vh'}}>
                                            Open
                                        </div>
                                        <i><div style={{opacity: '0.5', marginTop: '0.5vh', color: 'gray', fontSize: '1.75vh'}}>
                                            Messenger
                                        </div></i>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row className="user-chat" onClick={this.onClick}>
                                <Grid.Column width={1}></Grid.Column>
                                <Grid.Column width={2}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </Grid.Column>
                                <Grid.Column width={10} className="user-info">
                                    <div style={{marginTop: '-0.7vh'}}>
                                        <div style={{opacity: '0.2', fontWeight: 'bold', fontSize: '2vh'}}>
                                            Open
                                        </div>
                                        <i><div style={{opacity: '0.5', marginTop: '0.5vh', color: 'gray', fontSize: '1.75vh'}}>
                                            Messenger
                                        </div></i>
                                    </div>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </div>
                </Grid>
            </Grid.Column>
        )
    }
}