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
        keyWord: {
            type: String,
            required: true,
        },
        nutrition: {
            calories: {
                type: Number,
                required: true,
                default: 0,
            },
            totalFat: {
                type: Number,
                default: 0,
            },
            saturatedFat: {
                type: Number,
                default: 0,
            },
            transFat: {
                type: Number,
                default: 0,
            },
            cholesterol: {
                type: Number,
                default: 0,
            },
            sodium: {
                type: Number,
                default: 0,
            },
            carbohydrates: {
                type: Number,
                default: 0,
            },
            fiber: {
                type: Number,
                default: 0,
            },
            sugar: {
                type: Number,
                default: 0,
            },
            addedSugar: {
                type: Number,
                default: 0,
            },
            protein: {
                type: Number,
                default: 0,
            },
        }
    }
);

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;