const server = require('../../server').server;
const mongoose = require('mongoose');

module.exports = function(){

    server.get('/projects', function(req, res){

        const Project = mongoose.model('Project');

        Project.find(function(err, docs){

            res.send(docs);

        });

    });

    server.post('/project', function(req, res){

        const data = req.body;

        const Project = mongoose.model('Project');

        const newProject = Project(data);

        newProject.save(function(){

           res.send(newProject);

        });

    });

    server.delete('/project/:id', function(req, res){

        const projectId = req.params.id;

        const Project = mongoose.model('Project');

        Project.findByIdAndRemove(projectId, function(err, doc){

            if(!err){
                res.send(doc);
            }
            else{
                res.status(400).send(err);
            }

        });

    });

    server.put('/project/:id', function(req, res){

        const projectId=req.params.id;

        const updatedData = req.body;

        const Project = mongoose.model('Project');

        Project.findByIdAndUpdate(projectId, updatedData, {new:true}, function(err, doc){

            if(!err){
                res.send(doc);
            }
            else{
                res.status(400).send(err);
            }

        });

    });

};
