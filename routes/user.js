const { Router } = require('express');
const { getUsers, createUser, editUser, editUserName, deleteUser } = require('../controllers/user')

const router = Router();

router.post('/', createUser)
router.get('/', getUsers)
router.patch('/', editUserName)
router.put('/:userId', editUser)
router.delete('/', deleteUser)


module.exports = router;