(function(angular) {
  
  var searchAlong = {
    templateUrl: 'peopleData.html',
    bindings: {
      onTextChange: '&',
      peoples: '<'
    },
    controller: 'PeopleSearchController',
    controllerAs: 'esc'
  }
  
  angular
    .module('peopleSearch')
    .component('searchAlong', searchAlong);
    
  function PeopleSearchController($scope) {
  }
  
  angular
    .module('peopleSearch')
    .controller('PeopleSearchController', PeopleSearchController);
})(angular);