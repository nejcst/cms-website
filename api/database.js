const mongoose = require('mongoose');

exports.init = function(){

    return new Promise (function(resolve,  reject){

        mongoose.connect('mongodb://localhost/sae/assignment');

        mongoose.connection.on('error', function(err){

            console.log(err);
            reject(err);

        });

        mongoose.connection.once('open', function(){

            console.log('connection opened');
            resolve();

        });

    });

};