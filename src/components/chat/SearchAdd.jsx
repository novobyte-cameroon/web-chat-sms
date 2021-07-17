import React, {Component} from 'react';
import {alpha, makeStyles} from '@material-ui/core/styles';
import './SearchAdd.scss'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';


export default class SearchAdd extends Component {
    render() {
        const {placeholder} = this.props
        return (
            <div>
                <div style={{backgroundColor: '#f9fafc'}}>
                    <div className="champ-recherche">
                        <div>
                            <i><InputBase
                                className="input-champ"
                                placeholder={placeholder} inputProps={{'aria-label': 'search google maps'}}
                                name="message"
                            /></i>
                        </div>
                        <div className="search-logo">
                            <IconButton aria-label="menu">
                                <SearchOutlinedIcon className="search-logo-1"/>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
