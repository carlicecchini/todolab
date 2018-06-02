(function(){
  angular.module('app', ["ngRoute"])
  .config(function($routeProvider){
    $routeProvider
    .when('/',{
      template:'<homepage></homepage>'
    })
    .when('/app', {
      template: '<task-form></task-form>'
    })
    .otherwise({
      redirectTo: '/'
      // template: '<h4>page not found</h4>'
    });
  });



})();
