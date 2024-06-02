
const {request , response}= require("express");
const { info } = require ("../info");

const getinfo = (req,res)=>{

    return res.json({
        ok:true,
        statusCode:200,
        info
    });
}

module.exports = {
    getinfo
}

