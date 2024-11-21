// removeFood

const { Food } = require('../models');

module.exports = {
    async getFoods (req, res) {
        try {
            const foundFoods = await Food.find();

            if (!foundFoods || foundFoods.length === 0) {
                return res.status(400).json({ message: 'No foods found' });
            }

            res.json(foundFoods);
        } catch (err) {
            console.error('Error fetching foods:', err);
            res.status(500).json({ message: 'Error fetching foods' });
        }
    },

    async createFood({ body }, res) {
        try {
            console.log('Food creation data: ', body);
            const food = await Food.create(body);
            
            if (!food) {
                return res.status(400).json({ message: 'Something went wrong during food creation.' });
            }

            console.log('Food created: ', food);
            res.json({ food });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async getSingleFood({ food = null, params }, res) {
        try {
            const foundFood = await Food.findOne({
                $or: [{ _id: food ? food._id : params.id }, { name: params.name }],
            });
    
            if (!foundFood) {
                return res.status(400).json({ message: 'Cannot find a food with this id!' });
            }
    
            res.json(foundFood);
        } catch (err) {
            console.error('Error fetching a single food:', err);
            res.status(500).json({ message: 'Error fetching a single food' });
        }
    },

    async removeFood(req, res) {
        try {
            const food = await Food.findOneAndRemove({ _id: req.params.foodId });

            if (!food) {
                return res.status(404).json({ message: 'No food found with this id!' });
            }

            res.json({ message: 'Food successfully deleted!' });
        } catch (err) {
            console.error('Error deleting food:', err);
            res.status(500).json({ message: 'Error deleting food' });
        }
    }
}