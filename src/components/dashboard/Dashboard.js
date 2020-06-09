import React, { Component } from 'react';
import './Dashboard.css';
import List from '../list/List';
import Editor from '../editor/Editor';

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
                        <h2>Home</h2>
                    </div>
                    <div className="editor_container">
                        <Editor />
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