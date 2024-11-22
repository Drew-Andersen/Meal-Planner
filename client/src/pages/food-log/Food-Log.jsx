import { useState, useRef, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './food-log.css';

export default function FoodLog() {
    const [date, setDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

    const modalRef = useRef(null);
    const datepickerRef = useRef(null);

    const formatDate = (date) => {
        const dayOfWeek = date.getDay();
        const monthOfYear = date.getMonth();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${days[dayOfWeek]}, ${months[monthOfYear]} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`;
    };

    const dateInc = () => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + 1);
        setDate(newDate);
    };

    const dateDec = () => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() - 1);
        setDate(newDate);
    };

    const toggleModal = () => {
        setShowModal(!showModal);

        // Calculate the position of the calendar icon
        if (!showModal && datepickerRef.current) {
            const rect = datepickerRef.current.getBoundingClientRect();
            setModalPosition({
                top: rect.bottom + window.scrollY,  // Position below the button
                left: rect.left + window.scrollX    // Position horizontally aligned with the button
            });
        }
    };

    // Close the modal if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) &&
                datepickerRef.current && !datepickerRef.current.contains(event.target)) {
                setShowModal(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

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
                                <i
                                    ref={datepickerRef}
                                    id='datepicker'
                                    className="datepicker p-1 fa-solid fa-calendar-days"
                                    onClick={toggleModal}
                                ></i>
                            </div>
                        </h4>
                    </div>
                    <div className="horizontalLine"></div>
                </div>

            {/* Modal for Date Picker */}
            {showModal && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div
                        className="modal-content"
                        ref={modalRef}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'absolute',
                            top: `${modalPosition.top}px`,
                            left: `${modalPosition.left}px`,
                        }}
                    >
                        <DatePicker
                            selected={date}
                            onChange={(date) => {
                                setDate(date);
                                setShowModal(false); // Close the modal when a date is selected
                            }}
                            inline
                        />
                    </div>
                </div>
            )}
        </>
    );
}