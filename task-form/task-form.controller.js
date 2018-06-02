(function() {
  angular.module('app')
    .controller('TaskFormCtrl', function(TodoFactory) {
      var $ctrl = this;
      //put this in an init//
      $ctrl.listItems = TodoFactory.getData();
      $ctrl.newItem = function() {
        if ($ctrl.newDo) {
          $ctrl.listItems.push($ctrl.newDo);
          TodoFactory.setData($ctrl.listItems);
        }

        $ctrl.newDo = '';
      };

      $ctrl.onKeyDown = function(event) {
        if (event.key === 'Enter') {
          $ctrl.newItem();
        }
      };

    });
})();
