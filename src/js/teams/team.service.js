'use strict';

(function () {

    function teamService(teamFactory) {

        /**/
        this.getTeams = function() {
            return teamFactory.getTeams();
        }

        /**/
        this.getTeamById = function(id) {
            return teamFactory.getTeamById(id);
        }

        /**/
        this.getPlayersForTeam = function(id) {
            return teamFactory.getPlayersForTeam(id);
        }

        return this;
    }

    teamService.$inject=['teamFactory'];

    angular.module('ui-router-demo.services').factory('teamService', teamService);

})();