'use strict';


function config($stateProvider, $urlRouterProvider) {
    
    var states = [
        {
            name: 'stats',
            url: '/',
            component: 'stats'
        },
        {
            name: 'stats.team',
            url: 'team/{teamId}',
            component: 'team',
            resolve: {
                team: function(teamService, $stateParams) {
                    return teamService.getTeamById($stateParams.teamId);
                },
                roster: function(teamService, $stateParams) {
                    return teamService.getPlayersForTeam($stateParams.teamId);
                }
            }
        },
        {
            name: 'stats.team.player',
            abstract: true,
            url: '/player/{playerId}',
            component: 'player',
            resolve: {
                player: function(playerService, $stateParams) {
                    return playerService.getPlayerById($stateParams.playerId);
                }
            }
        },
        {
            name: 'stats.team.player.basic-stats',
            url: '',
            component: 'playerBasicStats'
        },
        {
            name: 'stats.team.player.extended-stats',
            url: '/etended-stats',
            component: 'playerExtendedStats'
        },
        {
            name: 'about',
            url: '/about',
            templateUrl: '../html/about.html'
        },
    ];


    states.forEach(function (state) {
        $stateProvider.state(state);
    })

    $urlRouterProvider.otherwise('/');
}

config.$inject=['$stateProvider', '$urlRouterProvider'];
