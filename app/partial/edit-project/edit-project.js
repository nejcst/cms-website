angular.module('app').controller('EditProjectCtrl',function($scope, projectService, $state, Upload){

    $scope.project = projectService.model.item;

    $scope.editProject = function(){

        projectService.update($scope.project._id, $scope.project)
            .then(function (res) {
                $state.go('projects');
            });

    };

    $scope.uploadFiles = function(file){

        Upload.upload({
            url:'http://localhost:3010/upload',
            data:{file:file}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });

    };

});
