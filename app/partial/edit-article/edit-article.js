angular.module('app').controller('EditArticleCtrl',function($scope, articleService, $state){

    $scope.article = articleService.model.item;

    $scope.editArticle = function(){

        articleService.update($scope.article._id, $scope.article)
            .then(function(res){

                $state.go('articles');

        });

    };

});
