import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import './dashboard.css';

export default function Dashboard() {
    return (
        <>
            <h1 className="text-center mt-4">User Dashboard</h1>
            <div className="goals">
                <div className="card">
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
            </div>
        </>
    )
}