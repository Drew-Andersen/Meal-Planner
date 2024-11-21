const mongoose = require('mongoose');
const { Schema } = mongoose;

const foodSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        servingSize: {
            type: String,
            required: true,
        },
        nutrition: {
            calories: {
                type: Number,
            },
            totalFat: {
                type: Number,
            },
            saturatedFat: {
                type: Number,
            },
            transFat: {
                type: Number,
            },
            cholesterol: {
                type: Number,
            },
            sodium: {
                type: Number,
            },
            carbohydrates: {
                type: Number,
            },
            fiber: {
                type: Number,
            },
            sugar: {
                type: Number,
            },
            addedSugar: {
                type: Number,
            },
            protein: {
                type: Number,
            },
        }
    }
);

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;