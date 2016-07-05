angular.module('app').controller('NewProjectCtrl',function($scope, projectService, $state){

    $scope.project = {};

    $scope.projectCreate = function(){

        projectService.create($scope.project, function(){
            $state.go('projects');
        });

    };

});
