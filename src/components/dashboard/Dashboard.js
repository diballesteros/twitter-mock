import React, { Component } from 'react';
import './Dashboard.css';
import List from '../list/List';
import Editor from '../editor/Editor';
import Header from './header/Header';
import Center from '../center/Center';
import RightSection from './rightSection/RightSection';
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
                <Header />
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
                            <RightSection />
                        </div>
                    </div>
                </main>
            </div>
        );
    };

}

export default Dashboard;