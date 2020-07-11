import React, { Component } from 'react';
import './Dashboard.css';
import List from '../List/List';
import Editor from '../Editor/Editor';
import Header from './Header/Header';
import Center from './Center/Center';
import RightSection from './RightSection/RightSection';
import Home from '../Home/Home';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }

    sendTweet() {

    }

    render() {
        return (
            <div className="dashboard">
                <Header />
                <main className="banner">
                    <div className="banner_container">
                        <div className="banner_divider">
                            <Center
                                header={
                                    <Home />
                                }
                                section={
                                    <Editor sendTweet={() => this.sendTweet()}/>
                                }
                                body={
                                    <List />
                                }
                            />
                            <RightSection />
                        </div>
                    </div>
                </main>
            </div>
        );
    };

}

export default Dashboard;