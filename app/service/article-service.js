angular.module('app').factory('articleService',function($http) {

    var articleService = {
        model: {
            list: [],
            item: null
        },
        create:function(data, cb){

            $http.post('http://localhost:3010/article', data)
                .then(function(res){
                    console.log(data);
                    if(cb){
                        cb();
                    }
                });

        },
        getAll:function(cb){

            var promise = $http.get('http://localhost:3010/articles');

            promise.then(function(res){

                articleService.model.list = res.data;

                if(cb){
                    cb(res.data);
                }

            });

            return promise;

        },
        update:function(){

        },
        delete:function(id){

            return $http.delete('http://localhost:3010/article'+id)
                .then(function(res){

                    angular.forEach(articleService.model.list, function(projectItem, i){

                        if(projectItem._id === id){
                            articleService.model.list.splice(i,1);
                        }

                    });
                });

        }
    };

    return articleService;
});
