
const createUser = (req, res) => {

    const { name, age } = req.body;

    res.json({
        status: 'ok',
        name,
        age
    });
}

const getUsers = (req, res) => {

    const { userName, age } = req.query

    res.json({
        status: 'ok',
        userName,
        age
    });
}

const editUserName = (req, res) => {

    const userId = req.params

    res.json({
        status: 'ok',
    });
}

const editUser = (req, res) => {

    const userId = req.params

    res.json({
        status: 'ok',
        userId
    });
}

const deleteUser = (req, res) => {

    const userId = req.params

    res.json({
        status: 'ok',
        userId
    });
}


module.exports = {
    getUsers,
    createUser,
    editUser,
    editUserName,
    deleteUser
}