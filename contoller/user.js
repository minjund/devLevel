const express = require('express');

exports.crateUser= function (req,res){
    res.send("만들어짐");
}
exports.readUser= function (req,res){
    res.send("확인");
}
exports.updateUser= function (req,res){
    res.send("수");
}
exports.deleteUser= function (req,res){
    res.send("삭");
}
