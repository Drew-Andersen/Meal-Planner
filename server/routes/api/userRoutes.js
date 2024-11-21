const router = require('express').Router();
const {
    createUser,
    getSingleUser,
    login,
    getUsers,
    removeUser,
} = require('../../controllers/userController');
const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser).put(authMiddleware); // works -- checked on Insomnia
router.route('/login').post(login); // works -- checked on Insomnia
router.route('/').get(getUsers); // works -- checked on Insomnia
router.route('/:userId').delete(removeUser); // works -- checked on Insomnia
router.route('/me').get(authMiddleware, getSingleUser);

module.exports = router;