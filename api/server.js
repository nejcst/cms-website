
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const ejs = require('ejs');
const PORT = require('./config').PORT;
const database = require('./database');

exports.server = server;
server.locals.moment = require('moment');

exports.init = function(){

    return new Promise(function(resolve, reject){

        server.set('view engine', 'ejs');

        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({extended:true}));
        server.use(cors());

        server.use('/uploads', express.static('./uploads'));
        server.use('/app', express.static('app'));
        server.use('/static', express.static('static'));

        server.listen(PORT, function(){

            console.log('server started');
            resolve();

        });

        server.get('/', (req, res) => {

            res.render('landing', { pageName:'landing'});
        });

        server.get('/articles', (req, res) =>{

           var Article = mongoose.model('Article');

           var pageNum = req.query.page;
           var postCount = 4;

           Article.find((err, articleDocs) => {

                var pageLength = Math.ceil(articleDocs.length / postCount);

                var page = articleDocs.splice(pageNum * postCount, postCount);

                res.render('articles', {
                    articles: page,
                    numberOfPages: pageLength,
                    pageNum: pageNum,
                    pageName: 'articles'

                });

            });

        });

        server.get('/article/:id', (req, res) =>{

            var articleId = req.params.id;

            var Article = mongoose.model('Article');

            Article.findById(articleId, (err, doc) =>{

                res.render('article', { article: doc });

            });

        });

        server.get('/projects', (req, res) => {

            var Project = mongoose.model('Project');

            var pageNum = req.query.page;
            var projectCount = 4;

            Project.find((err, projectDocs) => {

                var pageLength = Math.ceil(projectDocs.length / projectCount);
                var page = projectDocs.splice(pageNum * projectCount, projectCount);

               res.render('projects', {
                   projects: page,
                   numberOfPages: pageLength,
                   pageNum: pageNum,
                   pageName:'projects'


               });

            });
        });

        server.get('/project/:id', (req, res)=> {

           var projectId = req.params.id;

            var Project = mongoose.model('Project');

            Project.findById(projectId, (err, doc)=>{

                res.render('project', { project: doc });

            });

        });

    });

};
