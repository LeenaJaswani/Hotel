angular.module('meanhotel').component('hotelRating', {
  bindings: {
    stars: '@'
  },
  template: '<span class="fa fa-star checked"  ng-repeat="star in vm.stars track by $index">{{ star }}</span>',
  controller: 'HotelController',
  controllerAs: 'vm'
});

