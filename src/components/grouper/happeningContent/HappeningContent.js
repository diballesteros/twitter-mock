import React from 'react';
import './HappeningContent.css';
import nascarPicture from '../../../constants/img/NASCAR.jpg';

const HappeningContent = ({ grouperContent }) => (
    <div className="happeningContent">
        <a href="/#">
            <div className="happeningContent_text-container">
                <div className="happeningContent_category">
                    <div className="happeningContent_trend-type">
                        <span>{grouperContent.user}</span>
                    </div>
                    <div className="happeningContent_dot">
                        <span>•</span>
                    </div>
                    <div className="happeningContent_time-place">
                        <span>{grouperContent.time}</span>
                    </div>
                </div>
                <div className="happeningContent_main">
                    <span>{grouperContent.text}</span>
                </div>
            </div>
            <div className="happeningContent_picture-container">
                <div>
                    <img src={nascarPicture} alt='trendingpicture'></img>
                </div>
            </div>
        </a>
    </div>

);

export default HappeningContent;
