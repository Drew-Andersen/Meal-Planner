import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getFoods } from '../../../utils/API';
import './search.css';

export default function Search() {
    const location = useLocation();
    const [searchResults, setSearchResults] = useState([]);
    const [keyWord, setKeyWord] = useState([]);
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        if (query) {
            fetchSearchResults(query).then(setSearchResults);
        }
    }, [query]);

    const fetchSearchResults = async (query) => {
        try {
            const response = await getFoods();
            const foods = await response.json();
            console.log(`Foods retrieved:`, foods);

            const filteredFoods = foods.filter(food => food.keyWord.toLowerCase() === `${query}`);
            setKeyWord(filteredFoods);
        } catch (err) {
            console.log(err);
        }
    };

    const handleAddFoodToLog = () => {
        // adds food to the log
        console.log('Add Clicked');
    }

    const handleCreateFood = () => {
        // create food
        console.log('Create food Clicked');
    }

    return (
        <div className="search-results">
            <h2>Search Results for "{query}"</h2>
            <div className="foods-grid">
                <div className='my-2 create-food-card'>
                    {/* When create food is clicked ... have a modal pop-up to create a new food */}
                    <h6>Dont see what you are looking for?</h6>
                    <button className='btn btn-primary create-food-btn' onClick={handleCreateFood}>Create Food</button>
                </div>
                {keyWord.length > 0 ? (
                    keyWord.map((food) => (
                        <div className="food-card" key={food._id}>
                            <h4 className='food-name'>{food.name}</h4>
                            <div className='info-div'>
                                <p className='facts'>
                                    {food.servingSize}, {food.nutrition.calories} calories
                                </p>
                                <button className='btn btn-primary add-to-log-btn' onClick={() => handleAddFoodToLog(food)}>Add</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <>
                        <p>No results found for your search.</p>
                        <div className='info-div my-2 create-food-card'>
                            <h6>Would you like to add a food?</h6>
                            <button className='btn btn-primary create-food-btn' onClick={handleCreateFood}>Create Food</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}