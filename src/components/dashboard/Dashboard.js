import React, { Component } from 'react';
import './Dashboard.css';
import List from '../list/List';
import Editor from '../editor/Editor';
import Option from '../option/Option';
import Button from '../button/Button';

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
                    <div>
                        <div>
                            Icon
                        </div>
                        <div>
                            <Option>Home</Option>
                            <Option>Notification</Option>
                            <Option>Messages</Option>
                            <Option>Profile</Option>
                        </div>
                        <div className="left_section_button-container">
                            <Button>Tweet</Button>
                        </div> 
                    </div>
                </div>
                <div className="center_section">
                    <div className="home_container">
                        <h2>Home</h2>
                    </div>
                    <div className="editor_container">
                        <Editor />
                    </div>
                    <div className="separator"></div>
                    <List />
                </div>
                <div className="right_section">

                </div>
                
            </div>
        );
    };

}

export default Dashboard;