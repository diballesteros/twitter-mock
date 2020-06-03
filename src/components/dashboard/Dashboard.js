import React, { Component } from 'react';
import './Dashboard.css';
import List from '../list/List';

class Dashboard extends Component {
    constructor (props) {
        super (props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="">
                <List />
            </div>
        );
    };

}

export default Dashboard;