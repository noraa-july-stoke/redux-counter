import { useSelector, useDispatch } from 'react-redux';

import './Time.scss';
const Time = () => {

    const time = useSelector(store => store.time)

    return (
        <div className="time-container">
            <h2>Time Display: </h2>
        </div>
    );
};

export default Time;
