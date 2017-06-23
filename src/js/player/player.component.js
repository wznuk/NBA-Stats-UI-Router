'use strict';

(function() {

    function playerCtrl(playerService, $state) {
        var ctrl = this;
        ctrl.viewExtendedStats = false;

        console.log(ctrl.team.color);

        if($state.current.name.indexOf('extended-stats')) {
            ctrl.viewExtendedStats = true;
        }
        ctrl.closeModal = function() {
            $state.go('^.^')
        }

        ctrl.viewBasic = function() {
            ctrl.viewExtendedStats = false;
            $state.go('stats.team.player.basic-stats');
        }

        ctrl.viewExtended = function() {
            ctrl.viewExtendedStats = true;
            $state.go('^.extended-stats');
        }
    }

    playerCtrl.$inject = ['playerService', '$state'];

    angular.module('ui-router-demo.components').component('player', {
        templateUrl : '../../html/player.html',
        bindings: {
            player: '<',
            roster: '<',
            team: '<'
        },
        controller: playerCtrl
    });
})();