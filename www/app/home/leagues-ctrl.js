(function(){

    'use strict';

    angular.module('eliteApp').controller('LeaguesCtrl',['$state','eliteApi',LeaguesCtrl]);

    function LeaguesCtrl($state, eliteApi){
        var vm = this;

        var leagues = eliteApi.getLeagues();
        // var leagueData = eliteApi.getLeagueData();

        // console.log('leagues:');
        // console.log(leagues);
        // console.log('leagueData:');
        // console.log(leagueData);

        vm.leagues = leagues;

        vm.selectLeague = function(leagueId){
            console.log('leagueId:');
            console.log(leagueId);

            //TODO: select correct League
            $state.go("app.teams");
            
        };


    }

})();