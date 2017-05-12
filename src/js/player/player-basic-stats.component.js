'use strict';

(function() {

    function playerBasicStatsCtrl() {
        var ctrl = this;

    }

    playerBasicStatsCtrl.$inject = [];

    angular.module('ui-router-demo.components').component('playerBasicStats', {
        templateUrl : '../../html/player-basic-stats.html',
        bindings: {
            player: '<'
        },
        controller: playerBasicStatsCtrl
    });
})();