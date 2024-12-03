import React from "react";
import '../food-log.css';

export default function AddFood() {
    const handleSearch = () => {
        // handle search function
        console.log('Search clicked');// -- working
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
                        <input className="search-input" type="text" />
                        <button className="px-4 search" onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </>
    )
}