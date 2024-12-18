import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './createFood.css';

export default function CreateFood() {
    const [foodFormData, setFoodFormData] = useState({
        name: '',
        servingSize: '',
        keyWord: '',
        // {
        //     calories: '',
        //     totalFat: '',
        //     saturatedFat: '',
        //     transFat: '',
        //     cholesterol: '',
        //     sodium: '',
        //     carbohydrates: '',
        //     fiber: '',
        //     sugar: '',
        //     addedSugar: '',
        //     protein: ''
        // }
    });
    const [nutrition, setNutrition] = useState({
        calories: '',
        totalFat: 0,
        saturatedFat: 0,
        transFat: 0,
        cholesterol: 0,
        sodium: 0,
        carbohydrates: 0,
        fiber: 0,
        sugar: 0,
        addedSugar: 0,
        protein: 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFoodFormData({ ...foodFormData, [name]: value });
        if (value >= 0) {
            setNutrition({ ...nutrition, [name]: value });
        } else {
            console.log('No negative values allowed');
        }

    };

    const handleFormSubmit = (e) => {
        console.log('Submit form submitted');

        e.preventDefault();

        const foodData = { ...foodFormData, nutrition };

        fetch('http://localhost:3001/api/foods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(foodData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Food created:', data);
                setFoodFormData({
                    name: '',
                    servingSize: '',
                    keyWord: '',
                });
                setNutrition({
                    calories: '',
                    totalFat: 0,
                    saturatedFat: 0,
                    transFat: 0,
                    cholesterol: 0,
                    sodium: 0,
                    carbohydrates: 0,
                    fiber: 0,
                    sugar: 0,
                    addedSugar: 0,
                    protein: 0
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center my-5'>
            <div className="create-food-form-div">
                <h1 className="text-center mb-4">Create Food</h1>
                <Form>
                    <Form.Group className="form-group d-flex">
                        <Form.Label className='label' htmlFor="food-name">
                            <strong>Food Name</strong>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Food Name"
                            name="name"
                            onChange={handleInputChange}
                            value={foodFormData.name}
                            className="form-control rounded"
                        />
                    </Form.Group>
                    <Form.Group className="form-group d-flex">
                        <Form.Label className='label' htmlFor="food-serving-size">
                            <strong>Serving Size</strong>
                        </Form.Label>
                        <Form.Control
                            // type="number"
                            type='text'
                            placeholder='Enter the serving size with unit of measure'
                            name="servingSize"
                            onChange={handleInputChange}
                            value={foodFormData.servingSize}
                            className="form-control rounded"
                        />
                    </Form.Group>
                    <Form.Group className="form-group d-flex">
                        <Form.Label className='label' htmlFor="food-name">
                            <strong>Key Word</strong>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Key Word"
                            name="keyWord"
                            onChange={handleInputChange}
                            value={foodFormData.keyWord}
                            className="form-control rounded"
                        />
                    </Form.Group>
                    {/* Nutrition Facts */}
                    <Form.Group className="form-group">
                        <h5 className='text-center'>Nutrition</h5>
                        <Form.Group className="form-group d-flex">
                            <Form.Label className='label' htmlFor="calories">
                                <strong>Calories</strong>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter the calories"
                                name="calories"
                                onChange={handleInputChange}
                                value={nutrition.calories}
                                className="form-control rounded"
                            />
                        </Form.Group>
                        <Form.Group className="form-group d-flex">
                            <Form.Label className='label' htmlFor="totalFat">
                                <strong>Total Fat</strong>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter the total fat in grams"
                                name="totalFat"
                                onChange={handleInputChange}
                                value={nutrition.totalFat}
                                className="form-control rounded"
                            />
                        </Form.Group>
                        <Form.Group className="form-group d-flex">
                            <Form.Label className='label' htmlFor="saturatedFat">
                                <strong>Saturated Fat</strong>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter the saturated fat in grams"
                                name="saturatedFat"
                                onChange={handleInputChange}
                                value={nutrition.saturatedFat}
                                className="form-control rounded"
                            />
                        </Form.Group>
                        <Form.Group className="form-group d-flex">
                            <Form.Label className='label' htmlFor="transFat">
                                <strong>Trans Fat</strong>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter the trans fat in grams"
                                name="transFat"
                                onChange={handleInputChange}
                                value={nutrition.transFat}
                                className="form-control rounded"
                            />
                        </Form.Group>
                        <Form.Group className="form-group d-flex">
                            <Form.Label className='label' htmlFor="cholesterol">
                                <strong>Cholesterol</strong>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter the cholesterol in milligrams"
                                name="cholesterol"
                                onChange={handleInputChange}
                                value={nutrition.cholesterol}
                                className="form-control rounded"
                            />
                        </Form.Group>
                        <Form.Group className="form-group d-flex">
                            <Form.Label className='label' htmlFor="sodium">
                                <strong>Sodium</strong>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter the sodium in milligrams"
                                name="sodium"
                                onChange={handleInputChange}
                                value={nutrition.sodium}
                                className="form-control rounded"
                            />
                        </Form.Group>
                        <Form.Group className="form-group d-flex">
                            <Form.Label className='label' htmlFor="carbohydrates">
                                <strong>Carbohydrates</strong>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter the carbohydrates in grams"
                                name="carbohydrates"
                                onChange={handleInputChange}
                                value={nutrition.carbohydrates}
                                className="form-control rounded"
                            />
                        </Form.Group>
                        <Form.Group className="form-group d-flex">
                            <Form.Label className='label' htmlFor="fiber">
                                <strong>Fiber</strong>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter the fiber in grams"
                                name="fiber"
                                onChange={handleInputChange}
                                value={nutrition.fiber}
                                className="form-control rounded"
                            />
                        </Form.Group>
                        <Form.Group className="form-group d-flex">
                            <Form.Label className='label' htmlFor="sugar">
                                <strong>Sugar</strong>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter the sugar in grams"
                                name="sugar"
                                onChange={handleInputChange}
                                value={nutrition.sugar}
                                className="form-control rounded"
                            />
                        </Form.Group>
                        <Form.Group className="form-group d-flex">
                            <Form.Label className='label' htmlFor="addedSugar">
                                <strong>Added Sugar</strong>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter the added sugar in grams"
                                name="addedSugar"
                                onChange={handleInputChange}
                                value={nutrition.addedSugar}
                                className="form-control rounded"
                            />
                        </Form.Group>
                        <Form.Group className="form-group d-flex">
                            <Form.Label className='label' htmlFor="protein">
                                <strong>Protein</strong>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter the added protein in grams"
                                name="protein"
                                onChange={handleInputChange}
                                value={nutrition.protein}
                                className="form-control rounded"
                            />
                        </Form.Group>
                    </Form.Group>

                    <div className='text-center'>
                        <Button
                            className='btn btn-success w-50 rounded'
                            type='submit'
                            onClick={handleFormSubmit}
                        >
                            Create Food
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}