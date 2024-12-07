import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import './dashboard.css';

export default function Dashboard() {
    return (
        <>
            <h1 className="container text-center">(User.name) Dashboard</h1>
            <div className="buffer">
                <div className="row goals d-flex">
                    <div className="card px-2 py-2 col-lg-5 col-sm-12 my-3">
                        <h3 className="calorie-div">Calories</h3>
                        <p className='description'>Reamining = Goal - Food</p>
                        <div className="cal-remaining d-flex">
                            <div className="calorie-progress-bar col-6 text-center">
                                {/* Insert a Circle progress bar showing remaining calories */}
                                <div className="icon">
                                    <CircularProgressbarWithChildren
                                        className='CircularProgressBar'
                                        value="100"
                                    >
                                        <div className="inner">
                                            <i className="fa-solid fa-fire"></i>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                            </div>
                            <div className="base-goal col-6">
                                <div className="base-goal d-flex">
                                    <i className="fa-solid fa-flag m-2"></i>
                                    <div>
                                        <h6 className='mb-0'>Base Goal</h6>
                                        <p className='mt-0'>cals</p>
                                    </div>

                                </div>
                                <div className="food-goal d-flex">
                                    <i className="fa-solid fa-utensils m-2"></i>
                                    <div>
                                        <h6 className='mb-0'>Food</h6>
                                        <p className='mt-0'>0 foods recorded</p>
                                    </div>
                                </div>

                                <div className="exercise-goal d-flex">
                                    <i className="fa-solid fa-dumbbell m-2"></i>
                                    <div>
                                        <h6 className='mb-0'>Exercise</h6>
                                        <p className="mt-0">0 cals burned</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* 2nd Card */}
                    <div className="card px-2 py-2 col-lg-5 col-sm-12 my-3">
                        <h3 className="macro-div">Macros</h3>
                        <div className="macro-progress-bar text-center d-flex">
                            {/* Circle progress bar showing Carbs */}
                            <div className="icon mx-1">
                                <p className='label'><strong>Carbohydrates</strong></p>
                                <CircularProgressbarWithChildren
                                    className='CircularProgressBar'
                                    value="100"
                                >
                                    <div className="inner">
                                        <i className="fa-solid fa-fire"></i>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            {/* Circle progress bar showing Fats */}
                            <div className="icon mx-1">
                                <p className='label'><strong>Fats</strong></p>
                                <CircularProgressbarWithChildren
                                    className='CircularProgressBar'
                                    value="100"
                                >
                                    <div className="inner">
                                        <i className="fa-solid fa-fire"></i>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                            {/* Circle progress bar showing Protein */}
                            <div className="icon mx-1">
                                <p className='label'><strong>Protein</strong></p>
                                <CircularProgressbarWithChildren
                                    className='CircularProgressBar'
                                    value="100"
                                >
                                    <div className="inner">
                                        <i className="fa-solid fa-fire"></i>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}