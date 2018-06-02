(function(){
  angular.module('app')
  .component('taskList', {
    templateUrl: 'task-list/task-list.html',
    controller: 'TaskListCtrl',
    bindings: {
      list: '<',
      search: '<'
    }
  });
})();
