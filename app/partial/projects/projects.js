angular.module('app').controller('ProjectsCtrl',function($scope, projectService){

    $scope.projects = projectService.model.list;

    $scope.deleteProject = function(id){

        projectService.delete(id);

    };

    $scope.editProject = function (id) {

    };



});
