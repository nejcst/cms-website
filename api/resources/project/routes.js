const server = require('../../server').server;
const mongoose = require('mongoose');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

module.exports = function(){

    server.post('/upload', upload.single('file'), function(req, res){

        console.log(res.file);
        res.sendStatus(200);

    });

    server.get('/projects', function(req, res){

        const Project = mongoose.model('Project');

        Project.find(function(err, docs){

            res.send(docs);

        });

    });

    server.get('/project/:id', function(req, res){

        const projectId = req.params.id;

        const Project = mongoose.model('Project');

        Project.findById(projectId, function(err, doc){

            if(!err){
                res.send(doc);
            }
            else{
                res.status(400).send(err);
            }

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
