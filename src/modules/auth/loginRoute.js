module.exports = app => {
    const router = require('express').Router();

    const login = require('../../controller/user.controller')
    router.post('/signup', login.createUser);
    router.post('/login', login.loginUser);
    router.get('/', (req, res) => {
        return res.send("hello dear")
    })

    app.use('/api', router)
}
