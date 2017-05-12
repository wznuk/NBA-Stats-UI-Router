'use strict';

(function() {

    function playerExtendedStatsCtrl() {
        var ctrl = this;

    }

    playerExtendedStatsCtrl.$inject = [];

    angular.module('ui-router-demo.components').component('playerExtendedStats', {
        templateUrl : '../../html/player-extended-stats.html',
        bindings: {
            player: '<'
        },
        controller: playerExtendedStatsCtrl
    });
})();