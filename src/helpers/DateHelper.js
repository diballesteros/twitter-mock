import React from 'react'

const convertDate = (date) => {
    const dateDifference = Date.now() - date;

    if (dateDifference > 86400000) {
        return (new Date(Number(date))).toLocaleString('default', {month: 'long', day: 'numeric'});
    }
    if (dateDifference > 3600000) {
        return (dateDifference / (1000 * 60 * 60)).toFixed() + 'h';
    }

    if (dateDifference > 60000) {
        return (dateDifference / (1000 * 60)).toFixed() + 'm';
    }

    return (dateDifference / 1000).toFixed() + 's';
}

const DateHelper = ({children}) => (
        <>{convertDate(children)}</>
);

export default DateHelper;
