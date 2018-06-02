(function(){
angular.module('app')
.factory('TodoFactory', function(){
  var todos = ['pets'];

  return{
    setData: function(data){
      todos = data;
    },
    getData: function(){
      return todos;
    }
  }
});
})();
