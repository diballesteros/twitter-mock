import React, { Component } from 'react';
import './Dashboard.css';
import List from '../list/List';
import Editor from '../editor/Editor';
import Option from '../option/Option';
import Search from '../search/Search';
import Grouper from '../grouper/Grouper';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import Center from '../center/Center';
import Home from '../home/Home';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="dashboard">
                <header className="left_section">
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
                </header>
                <main className="banner">
                    <div className="banner_container">
                        <div className="banner_divider">
                            <Center
                                header={
                                    <Home />
                                }
                                section={
                                    <Editor />
                                }
                                body={
                                    <List />
                                }
                            />
                            <div className="right_section">
                                <div>
                                    <div className="search_container">
                                        <Search />
                                    </div>
                                    <div className="whats-happening_container">
                                        <Grouper />
                                    </div>
                                    <div className="who-to-follow_container">
                                        <Grouper />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>    
            </div>
        );
    };

}

export default Dashboard;