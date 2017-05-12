'use strict';

(function () {

    function playerService(playerFactory) {

        /**/
        this.getPlayerById = function(playerId) {
            return playerFactory.getPlayerById(playerId);
        }

        return this;
    }

    playerService.$inject=['playerFactory'];

    angular.module('ui-router-demo.services').factory('playerService', playerService);

})();