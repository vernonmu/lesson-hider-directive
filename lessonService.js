angular.module('directivePractice').service('lessonService', function($http){
  return {
      getSchedule: function() {
        return $http.get('schedule.json')
        }
      }
})
