const server = require('../../server').server;
const mongoose = require('mongoose');

module.exports = function(){

    server.get('/articles', function(req, res){

        const Article = mongoose.model('Article');

        Article.find(function(err, data){

            if (!err){
                res.send(data);
            }
            else {
                res.status(400).send(err);
            }

        });

    });

    server.get('/article/:id', function(req, res){

        const articleId = req.params.id;

        const Article = mongoose.model('Article');

        Article.findById(articleId, function(err, doc){

            if(!err){
                res.send(doc);
            }
            else{
                res.status(400).send(err);
            }

        });

    });

    server.post('/article', function(req, res){

        const data = req.body;

        const Article = mongoose.model('Article');

        const newArticle = Article(data);

        newArticle.save(function(){

            res.send(newArticle);

        });

    });

    server.delete('/article/:id', function(req, res){

        const articleId = req.params.id;

        const Article = mongoose.model('Article');

        Article.findByIdAndRemove(articleId, function(err, docs){

            if (!err) {
                res.send(docs);
            }
            else {
                res.status(400).send(err);
            }
        });

    });

    server.put('/article/:id', function(req, res){

        const updatedData = req.body;

        const articleId = req.params.id;

        const Article = mongoose.model('Article');

        Article.findByIdAndUpdate(articleId, updatedData, {new:true}, function(err, docs){

            if (!err){
                res.send(docs);
            }
            else {
                res.status(400).send(err);
            }

        });

    });

};