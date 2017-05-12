'use strict';

(function() {

    function teamListCtrl(teamService, $state) {
        var ctrl = this;

        ctrl.teams = teamService.getTeams();

        ctrl.viewTeam = function(id) {
            console.log(id);
            $state.go('stats.team', {teamId: id});
        }

        console.log(ctrl.teams);
    }

    teamListCtrl.$inject = ['teamService', '$state'];

    angular.module('ui-router-demo.components').component('teamList', {
        templateUrl : '../../html/teamList.html',
        bindings: {

        },
        controller: teamListCtrl
    });
})();