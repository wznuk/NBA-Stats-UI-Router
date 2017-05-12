'use strict';

(function() {

    function teamCtrl(teamService, $state) {
        var ctrl = this;

        console.log(ctrl.team);

        ctrl.viewPlayer = function(id) {
            $state.go('stats.team.player.basic-stats', {playerId: id});
        }
    }

    teamCtrl.$inject = ['teamService', '$state'];

    angular.module('ui-router-demo.components').component('team', {
        templateUrl : '../../html/team.html',
        bindings: {
            team: '<',
            roster: '<'
        },
        controller: teamCtrl
    });
})();