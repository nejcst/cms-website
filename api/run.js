var server = require('./server');
var database = require('./database');

database.init()
    .then(server.init)
    .then(()=>{
        require('./resources')();
    })
    .then(()=>{

        console.log('All is well on port 3010');

    })
    .catch(function(err){

        console.log('Catch error:', err);

    });

