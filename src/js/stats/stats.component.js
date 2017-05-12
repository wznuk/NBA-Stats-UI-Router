'use strict';

(function() {

    function statsCtrl($state, $scope) {
        var ctrl = this;
        ctrl.state = $state;
        ctrl.showInfoBox = true;

        $scope.$watch(function(){
            return $state.$current.name
        }, function(newVal, oldVal){
            ctrl.showInfoBox = true;
        }) 

        ctrl.closeInfoBox = function() {
            ctrl.showInfoBox = false;
        }
    }

    statsCtrl.$inject = ['$state', '$scope'];

    angular.module('ui-router-demo.components').component('stats', {
        templateUrl : '../../html/stats.html',
        bindings: {

        },
        controller: statsCtrl
    });
})();