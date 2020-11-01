const express = require('express');
const route = express.Router();
const user = require('./../contoller/user');

route.route('/user')
    .get(user.readUser)
    .post(user.crateUser)
    .put(user.updateUser)
    .delete(user.deleteUser)

// route.get('/user', function(req,res){
//     res.send('Hellow world');
// })

module.exports = route;