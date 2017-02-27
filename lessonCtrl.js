angular.module('directivePractice').controller('lessonCtrl', function($scope, lessonService) {

  $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo']

  $scope.announceDay = function(lesson, day) {
    if(!day) {
      alert(lesson + ' is not schedule')
    }
    else alert(lesson + ' is active on ' + day + '.')
  }

  $scope.removeLesson = function(lesson) {
    console.log(lesson)
    $scope.lessons.splice($scope.lessons.indexOf(lesson), 1)
  }


})
