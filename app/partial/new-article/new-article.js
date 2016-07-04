angular.module('app').controller('NewArticleCtrl',function($scope, articleService, $state){

    $scope.article = {};

    $scope.articleCreate = function(){

        articleService.create($scope.article, function(){
            $state.go('articles');
        });
    };

});
