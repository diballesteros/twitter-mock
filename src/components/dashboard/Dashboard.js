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
            <div className="dashboard">
                <div className="left_section">

                </div>
                <div className="center_section">
                    <div className="home_container">
                        <label>Home</label>
                    </div>
                    <div className="editor_container">
                        <label>Editor</label>
                    </div>
                    <List />
                </div>
                <div className="right_section">

                </div>
                
            </div>
        );
    };

}

export default Dashboard;