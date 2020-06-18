import React, { Component } from 'react';
import './Dashboard.css';
import List from '../list/List';
import Editor from '../editor/Editor';
import Option from '../option/Option';
import Button from '../button/Button';
import Icon from '../icon/Icon';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="dashboard">
                <div className="left_section">
                    <div>
                        <div className="left_section_home-button">
                            <Icon group="GENERAL" icon="dog" width="45" height="28" color="#1da1f2" />
                        </div>
                        <div>
                            <Option type="home">Home</Option>
                            <Option type="message">Messages</Option>
                            <Option type="profile">Profile</Option>
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