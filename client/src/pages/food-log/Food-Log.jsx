import './food-log.css';
import { useState } from 'react';

export default function FoodLog() {
    const [date, setDate] = useState(new Date());

    const formatDate = (date) => {
        const dayOfWeek = date.getDay();
        const monthOfYear = date.getMonth();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${days[dayOfWeek]}, ${months[monthOfYear]} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`
    }

    const dateInc = () => {
        const newDate = new Date(date); 
        newDate.setDate(date.getDate() + 1); 
        setDate(newDate);
    }

    const dateDec = () => {
        const newDate = new Date(date); 
        newDate.setDate(date.getDate() - 1);
        setDate(newDate); 
    }

    return (
        <>
            <div className="m-auto cont">
                <div className='flex'>
                    <h4 className='font18'>
                        <strong>Your Food Log For: </strong>
                        <div className='flex font15'>
                            <div className="arrow-btn left-arrow p-1 fa-solid fa-arrow-left" onClick={dateDec}></div>
                            <div className='date-btn px-2 py-1 text-center'>{formatDate(date)}</div>
                            <div className="arrow-btn right-arrow p-1 fa-solid fa-arrow-right" onClick={dateInc}></div>
                            <i className="datepicker p-1 fa-solid fa-calendar-days"></i>
                        </div>
                    </h4>
                </div>
                <div className="horizontalLine"></div>
            </div>
        </>
    )
}