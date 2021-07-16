import React, {Component} from 'react'
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import Header from "semantic-ui-react/dist/commonjs/elements/Header";

export default class TextMessage extends Component {
    render() {
        return (
            <Segment
                style={{marginLeft: '50%', position: 'relative', top: '85%', zIndex: 1000, width: '50%'}}>
                <p>Portals have tons of great callback functions to hook into.</p>
                <p>To close, simply click the close button or click away</p>
            </Segment>
        )
    }
}
