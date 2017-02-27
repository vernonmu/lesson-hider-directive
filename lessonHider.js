angular.module('directivePractice').directive('lessonHider', function() {
  return {
    templateUrl: 'lessonHider.html',
    restrictive: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&',
      removeLesson: '&'
    },
    link: function(scope, elem, attr) {

      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;

        scope.schedule.forEach(function(scheduleDay) {
          if (scheduleDay.lesson === scope.lesson) {
            console.log(scheduleDay.weekday)
            scope.lessonDay = scheduleDay.weekday;
            elem.css('text-decoration', 'line-through')
            scope.checkedBox = true;
            return
          }
        });
      })

      scope.changeStrike = function() {
        scope.checkedBox = !scope.checkedBox
        console.log(scope.checkedBox)
        if (!scope.checkedBox) {
          elem.css('text-decoration', 'none')
        }

        if (scope.checkedBox) {
          elem.css('text-decoration', 'line-through')
        }
      }
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule()
    }



  }

})
