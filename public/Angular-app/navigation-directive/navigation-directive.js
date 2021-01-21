angular.module('meanhotel').directive('mhNavigation',mhNavigation);
function mhNavigation(){
  return{
    restrict:'E',
    templateUrl:'Angular-app/navigation-directive/navigation-directive.html'
  };
}