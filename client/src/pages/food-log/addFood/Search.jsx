import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getFoods } from '../../../utils/API'; // -- need to add this

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

    return (
        <div className="search-results">
            <h2>Search Results for "{query}"</h2>
            <div className="foods-grid">
                {keyWord.length > 0 ? (
                    keyWord.map((food) => (
                        <div className="food-card" key={food._id}>
                            <h4>{food.name}</h4>
                            {/* Need to make a css class margin-left */}
                            <div className='margin-left d-flex'>
                                <p className='facts'>
                                    {food.servingSize}, {food.nutrition.calories} calories
                                </p>
                                <button className='btn btn-primary add-to-log' onClick={() => handleAddFoodToLog(food)}>Add</button>
                            </div>
                        </div>

                    ))
                ) : (
                    <p>No results found for your search.</p>
                )}
            </div>
        </div>
    )
}