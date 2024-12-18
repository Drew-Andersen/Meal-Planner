import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../food-log.css';

export default function AddFood() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log('Search clicked');// -- working
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    }

    const handleCreateFood = () => {
        // create food
        console.log('Create food Clicked');
        navigate('/createFood');
    }

    return (
        <>
            <div className="m-auto cont">
                <div className='flex w-100'>
                    <h4 className='font18 row w-100'>
                        <div className='gear flex w-100'>
                            <div>
                                <strong>Your Food Log For: </strong>
                            </div>
                        </div>
                    </h4>
                </div>
                <div className="horizontalLine"></div>
                <div className="mt-1 p-1">
                    <strong>Search our food database by name: </strong>
                    <div>
                        <input
                            className="search-input"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="px-4 search" onClick={handleSearch}>Search</button>
                    </div>
                </div>
                <div className='mt-2 horizontalLine'></div>
                <div className='my-2 create-food-card'>
                    {/* When create food is clicked ... have a modal pop-up to create a new food */}
                    <h6>You can also create a new food.</h6>
                    <button className='btn btn-primary create-food-btn' onClick={handleCreateFood}>Create Food</button>
                </div>
            </div>
        </>
    )
}