angular.module('app').controller('ArticlesCtrl',function($scope, articleService){

    $scope.articles = articleService.model.list;

    $scope.deleteArticle = function(id){

        articleService.delete(id);

    };

    $scope.editArticle = function(id){

    };

});
