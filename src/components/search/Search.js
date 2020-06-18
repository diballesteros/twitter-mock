import React from 'react';
import './Search.css';
import Icon from '../icon/Icon';

const Search = (props) => (
    <div className="search-bar">
        <div>
            <Icon group="SEARCH" icon="loop" width="20" height="20"/>
        </div>
        <div>
            <input placeholder="Search Pandi"/>
        </div>
    </div>
);

export default Search;
