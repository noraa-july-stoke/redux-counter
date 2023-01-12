import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react'
import { updateTime } from '../../../store';
import { connect } from "react-redux";

import './Time.scss';
const Time = () => {

    const dispatch = useDispatch();

    const days = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat']

    let time = useSelector(state => state.time.time.time)




    return (
        <div className="time-container">
            <h2>Time Display:</h2>
            <p>{days[+time.getDay()]}. {time.getMonth()+1}/{time.getDay()}/{time.getFullYear()} {}</p>
            <p>{time.getHours()}:{time.getMinutes()}:{`${time.getSeconds()}`}</p>
        </div>
    );
};


export default Time;
