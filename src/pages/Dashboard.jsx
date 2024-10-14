import './dashboard.css';

export default function Dashboard() {
    return(
        <>
            <h1 className="text-center mt-4">User Dashboard</h1>
            <div className="goals">
                <div className="card">
                    <h3 className="calorie-div">Calories</h3>
                    <p className='description'>Reamining = Goal - Food</p>
                    <div className="cal-remaining d-flex">
                        <div className="calorie-progress-bar col-6 text-center">
                            {/* Insert a Circle progress bar showing remaining calories */}
                            circle progress bar
                        </div>
                        <div className="base-goal col-6">
                            <h6>Base Goal</h6>
                            <h6>Food</h6>
                            <h6>Exercise</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}