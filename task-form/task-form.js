(function(){
  angular.module('app')
  .component('taskForm', {
    templateUrl: 'task-form/task-form.html',
    controller: 'TaskFormCtrl',
    bindings: {
      remove: '<',
    }
  });
})();
