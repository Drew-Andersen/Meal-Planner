import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './food-log.css';

export default function FoodLog() {
    const [date, setDate] = useState(new Date());
    const [showModal, setShowModal] = useState(false);
    const [showModalSettings, setShowModalSettings] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [modalPositionSettings, setModalPositionSettings] = useState({ top: 0, left: 0 });

    const modalRef = useRef(null);
    const datepickerRef = useRef(null);
    const dropdownRef = useRef(null);

    const navigate = useNavigate(); 

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

    const toggleModalDatepicker = () => {
        setShowModal(!showModal);

        if (!showModal && datepickerRef.current) {
            const rect = datepickerRef.current.getBoundingClientRect();
            setModalPosition({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX
            });
        }
    };

    const toggleModalSettings = () => {
        setShowModalSettings(!showModalSettings);

        if (!showModalSettings && dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            setModalPositionSettings({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX
            });
        }
    };

    // const handleSettingsChange = (e) => {
    //     const value = e.target.value;
    //     if (value === 'goal-settings') {
    //         navigate('/goals');  // Navigate to the /goals route
    //     } else if (value === 'recipes') {
    //         // Handle recipe link or other actions here
    //     }
    // };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) &&
                datepickerRef.current && !datepickerRef.current.contains(event.target)) {
                setShowModal(false);
            }

            if (modalRef.current && !modalRef.current.contains(event.target) &&
                dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowModalSettings(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleAddFood = () => {
        // Add food function
        console.log('Add food clikced');// -- working
    }

    return (
        <>
            <div className="m-auto cont">
                <div className='flex w-100'>
                    <h4 className='font18 row w-100'>
                        <div className='gear flex w-100'>
                            <div>
                                <strong>Your Food Log For: </strong>
                                <div className='flex font15'>
                                    <div className="arrow-btn left-arrow p-1 fa-solid fa-arrow-left" onClick={dateDec}></div>
                                    <div className='date-btn px-2 py-1 text-center'>{formatDate(date)}</div>
                                    <div className="arrow-btn right-arrow p-1 fa-solid fa-arrow-right" onClick={dateInc}></div>
                                    <i
                                        ref={datepickerRef}
                                        id='datepicker'
                                        className="datepicker p-1 fa-solid fa-calendar-days"
                                        onClick={toggleModalDatepicker}
                                    ></i>
                                </div>
                            </div>
                            {/* <div className='gear'>
                                <i
                                    className="fa-solid fa-gear"
                                    ref={dropdownRef}
                                    onClick={toggleModalSettings}
                                >
                                </i>
                            </div> */}
                        </div>
                    </h4>
                </div>
                <div className="horizontalLine"></div>
                <div className="goalDiv text-center">
                    <div className="Div p-1 mt-1">
                        <h6 className='mb-0 font14'>Calories</h6>
                        <p className='m-0 font14'>kcal</p>
                    </div>
                    <div className="Div p-1 mt-1">
                        <h6 className='mb-0 font14'>Carbs</h6>
                        <p className='m-0 font14'>g</p>
                    </div>
                    <div className="Div p-1 mt-1">
                        <h6 className='mb-0 font14'>Fat</h6>
                        <p className='m-0 font14'>g</p>
                    </div>
                    <div className="Div p-1 mt-1">
                        <h6 className='mb-0 font14'>Protein</h6>
                        <p className='m-0 font14'>g</p>
                    </div>
                    <div className="Div p-1 mt-1">
                        <h6 className='mb-0 font14'>Sodium</h6>
                        <p className='m-0 font14'>mg</p>
                    </div>
                    <div className="Div p-1 mt-1">
                        <h6 className='mb-0 font14'>Sugar</h6>
                        <p className='m-0 font14'>g</p>
                    </div>
                </div>
                <div className='mt-0 mx-0 pt-0 container d-block'>
                    <div className='meal'>
                        <h5 className='mx-3 my-2'>Meal 1</h5>
                        <Link to="/addFood" className='ml-4 font14' onClick={handleAddFood}>Add Food</Link>
                    </div>
                    <div className="horizontalLine1"></div>
                    <div className='meal'>
                        <h5 className='mx-3 my-2'>Meal 2</h5>
                        <Link to="/addFood" className='ml-4 font14' onClick={handleAddFood}>Add Food</Link>
                        <div className="horizontalLine1"></div>
                    </div>
                    <div className='meal'>
                        <h5 className='mx-3 my-2'>Meal 3</h5>
                        <Link to="/addFood" className='ml-4 font14' onClick={handleAddFood}>Add Food</Link>
                        <div className="horizontalLine1"></div>
                    </div>
                    <div className='meal'>
                        <h5 className='mx-3 my-2'>Meal 4</h5>
                        <Link to="/addFood" className='ml-4 font14' onClick={handleAddFood}>Add Food</Link>
                        <div className="horizontalLine1"></div>
                    </div>
                    <div className='meal'>
                        <h5 className='mx-3 my-2'>Meal 5</h5>
                        <Link to="/addFood" className='ml-4 font14' onClick={handleAddFood}>Add Food</Link>
                        <div className="horizontalLine1"></div>
                    </div>
                    <div className='meal'>
                        <h5 className='mx-3 my-2'>Meal 6</h5>
                        <Link to="/addFood" className='ml-4 font14' onClick={handleAddFood}>Add Food</Link>
                        <div className="horizontalLine1"></div>
                    </div>
                </div>

            </div>

            {/* Modal for Date Picker */}
            {showModal && (
                <div className="modal-overlay" onClick={toggleModalDatepicker}>
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
                                setShowModal(false);
                            }}
                            inline
                        />
                    </div>
                </div>
            )}

            {/* Modal for Settings */}
            {/* {showModalSettings && (
                <div className="modal-overlay" onClick={toggleModalSettings}>
                    <div
                        className="modal-content"
                        ref={modalRef}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'absolute',
                            top: `${modalPositionSettings.top}px`,
                            left: `${modalPositionSettings.left}px`,
                        }}
                    >
                        <select name="settings" id="settings-modal" onChange={handleSettingsChange}>
                            <option value="goal-settings">Goals</option>
                            <option value="recipes">Recipes</option>
                        </select>
                    </div>
                </div>
            )} */}
        </>
    );
}