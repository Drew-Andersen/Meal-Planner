const router = require('express').Router();
const {
    getFoods,
    createFood,
    getSingleFood,
    removeFood,
} = require('../../controllers/foodController');

router.route('/').get(getFoods).post(createFood);
router.route('/:foodId').get(getSingleFood).delete(removeFood);

module.exports = router;