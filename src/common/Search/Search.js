import React from 'react';
import './Search.css';
import Icon from '../Icon/Icon';

const Search = (props) => (
    <div className="search-bar">
        <div className="search-bar_icon">
            <Icon group="SEARCH" icon="loop" width="20" height="20"/>
        </div>
        <div className="search-bar_input">
            <input placeholder="Search Pandi"/>
        </div>
    </div>
);

export default Search;
