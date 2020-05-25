import React, { Component } from 'react';
import './Dashboard.css';
import Tweet from '../tweet/Tweet';
import { TWEETCONTENT as tweetContent } from '../../constants/constants';

class Dashboard extends Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="">
                <Tweet tweetContent={tweetContent}/>
            </div>
        );
    };

}

export default Dashboard;