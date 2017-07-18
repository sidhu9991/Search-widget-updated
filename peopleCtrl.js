(function(angular) {
  angular.module('peopleSearch').controller('peopleController', function (peopleService) {
    
    var vm = this;
    vm.peoples = [];
    vm.peopleSearch = function(searchQuery) {
      vm.apiPeopleData = peopleService.filteredPeople(searchQuery)
      vm.peoples = vm.apiPeopleData.people;
    }
    
  });
})(angular)