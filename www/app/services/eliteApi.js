(function(){
    'use strict';

    angular.module('eliteApp').factory('eliteApi',[eliteApi]);

    function eliteApi(){

        var leagues =[
            {
                "id": 2029,
                "name": "6th Grade Saturday 2014-15 League",
                "isDirty": false,
                "homeScreen": "Use the nav bar at the top to view the schedule by team and schedule by location (as well as directions).\n\n*\tThis League is designed for 6th Grade “B” Travel teams, and higher-level 5th Grade AAU caliber teams.\n*\t8 game minimum (will try to get 9 games scheduled if possible) plus/season ending tournament.  Plan is to end on February 28th.\n*\tSeason to start December 13th.\n*\tGames to be played at Centennial High School.\n*\tGame times 2pm and later.\n*\tMinimum 6 teams required.\n*\t$635 per team registration fee (includes referees fees).\n*\tAwards for 1st & 2nd Place in season ending tournament.\n*\t**All teams will be required to submit team rosters prior to the first game of the season.  Players must be in 5th/6th Grade and/or born after August 31, 2002.**\n\nHave a great season!\n\n**Inclement weather**: Inclement weather procedure depends on your location. Based on your game location, call:\n\n* Inclement Weather Hotline for Howard County Schools: 410-313-6827",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n\n*\tThe first team listed (under V) on the schedule is considered VISITORS and should wear Dark Jerseys. Second team listed (under H) is HOME and wears White (light) jerseys.\n*\tHome Team Provides game Ball – It should be a NFHS approved 28.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n*\tEach team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.\n*\t20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n*\tTwo 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n*\t**Free Throw Bonus**: We’re trying to minimize wasting playing time shooting fouls shots while the clock runs. \n*\t**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul. \n*\t**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls. So if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n*\tNo pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n*\t2 behavior related technical fouls result in removal from current and next game.\n*\tNo technical fouls for book errors. Just correct the mistake and move on.\n*\tTeams can start game with 4 players. If you have 4 players available at game time, the game must start.\n*\tOvertime - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul shot, one player at a time. All ten players shoot. If one team has made more shots than the other team after 10 shots, that team wins. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n*\tThe League Commissioner, Chris Steinbach (410-924-4324) will settle all disputes and rule interpretations. If Chris can’t be reached, the lead official will settle disputes or rules interpretations.",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 2024,
                "name": "7th Grade MS JV Friday 2014-15 League",
                "isDirty": false,
                "homeScreen": "###Games that were cancelled from Friday 3/6 at Dunloggin and Mayfield Woods are now Monday, 3/9 at Veterans ES and Ellicott Mills MS.  See detailed schedule below. \n### \n\n# Playoff Brackets\n\n## Division 1 Bracket\n![Division 1 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-jv-2015-d1.png)\n\n## Division 2 Bracket\n![Division 2 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-jv-2015-d2.png)\n\n## Division 3 Bracket\n![Division 3 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-jv-2015-d3.png)\n",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n* The first team listed on the schedule is considered HOME and should wear white (light). Second team listed is away and wears dark jerseys.\n* Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n* **For games not at Meadowbrook, each team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.** Score table persons are provided at Meadowbrook.\n* 20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n* Two 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n* **Free Throw Bonus:** We’re trying to minimize wasting playing time shooting fouls shots while the clock runs.   \n**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul.  \n**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n* No pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n* 2 behavior related technical fouls result in removal from current and next game.\n* No technical fouls for book errors. Just correct the mistake and move on.\n* Teams can start game with 4 players. If you have 4 players available at game time, the game must start.\n* **Overtime** - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul sho,t one player at a time. All ten players shoot. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n\nThe League Commissioner, will settle all disputes and rule interpretations. If Bill Nap or Steve Michelotti can’t be reached, the lead official will settle dispute or rules.",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 2025,
                "name": "7th Grade MS JV Saturday 2014-15 League",
                "isDirty": false,
                "homeScreen": "# Playoff Brackets\n\n## Travel Team Bracket\n![Travel Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/sat-jv-2015-d1.png)\n\n## Middle School Only Bracket\n![MS Only Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/sat-jv-2015-ms-only.png)\n",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n* The first team listed on the schedule is considered HOME and should wear white (light). Second team listed is away and wears dark jerseys.\n* Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball unless 2 6th grade teams are playing and they agree to use 28.5. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n* **For games not at Meadowbrook, each team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.** Score table persons are provided at Meadowbrook.\n* 20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n* Two 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n* **Free Throw Bonus:** We’re trying to minimize wasting playing time shooting fouls shots while the clock runs.   \n**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul.  \n**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n* No pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n* 2 behavior related technical fouls result in removal from current and next game.\n* No technical fouls for book errors. Just correct the mistake and move on.\n* Teams can start game with 4 players. If you have 4 players available at game time, the game must start.\n* **Overtime** - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul sho,t one player at a time. All ten players shoot. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n\nThe League Commissioner, will settle all disputes and rule interpretations. If Bill Nap or Steve Michelotti can’t be reached, the lead official will settle dispute or rules.",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 2028,
                "name": "7th-8th Grade HC Invitational 2014-15 League",
                "isDirty": false,
                "homeScreen": "Use the nav bar at the top to view the schedule by team and schedule by location (as well as directions).\n\nThe league will play a 10-game regular season with the last game on February 28. The following week there will be a single-elimination playoff to determine the champion.\n\nAll questions should be directed towards your coach.\n\nHave a great season!\n\n**Inclement weather**: Inclement weather procedure depends on your location. Based on your game location, call one of these numbers:\n\n* Meadowbrook, Roger Carter, and North Laurel: 410-313-4452 (option 2)\n* One of the Howard County Schools: 410-313-6827\n\n## Playoff Bracket\n![Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/sat-2015-hc-invitational.png)\n",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n* The first team listed on the schedule is considered HOME and should wear white (light). Second team listed is away and wears dark jerseys.\n* Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n* **For games not at Meadowbrook, each team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.** Score table persons are provided at Meadowbrook.\n* 20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n* Two 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n* **Free Throw Bonus:** We’re trying to minimize wasting playing time shooting fouls shots while the clock runs.   \n**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul.  \n**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n* No pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n* 2 behavior related technical fouls result in removal from current and next game.\n* No technical fouls for book errors. Just correct the mistake and move on.\n* Teams can start game with 4 players. If you have 4 players available at game time, the game must start.\n* **Overtime** - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul sho,t one player at a time. All ten players shoot. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n\nThe League Commissioner, will settle all disputes and rule interpretations. If Bill Nap or Steve Michelotti can’t be reached, the lead official will settle dispute or rules.",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 2026,
                "name": "8th Grade MS Varsity Friday 2014-15 League",
                "isDirty": false,
                "homeScreen": "Use the nav bar at the top to view the schedule by team and schedule by location (as well as directions).\n\nThe league will play a 10-game regular season with the last game on February 27. The following week there will be a single-elimination playoff to determine the champion. For playoffs, we will do 3 different divisions for parity. Additionally, there will be a \"Middle School Only\" playoff bracket as well.\n\nAll questions should be directed towards your coach.\n\nHave a great season!\n\n**Inclement weather**: Inclement weather procedure depends on your location. Based on your game location, call one of these numbers:\n\n* Meadowbrook, Roger Carter, and North Laurel: 410-313-4452 (option 2)\n* One of the Howard County Schools: 410-313-6827\n\n# Playoff Brackets\n**Note: Playoff seeding was determined by a combination of: strength of schedule, win/loss record, head-to-head, and scores against common opponents.**\n\n## Travel Team Bracket\n![Travel Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-varsity-2015-travel.png)\n\n## Middle School Only Bracket\n![MS Only Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-varsity-2015-ms-only.png)",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n* The first team listed on the schedule is considered HOME and should wear white (light). Second team listed is away and wears dark jerseys.\n* Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n* **For games not at Meadowbrook, each team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.** Score table persons are provided at Meadowbrook.\n* 20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n* Two 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n* **Free Throw Bonus:** We’re trying to minimize wasting playing time shooting fouls shots while the clock runs.   \n**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul.  \n**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n* No pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n* 2 behavior related technical fouls result in removal from current and next game.\n* No technical fouls for book errors. Just correct the mistake and move on.\n* Teams can start game with 4 players. If you have 4 players available at game time, the game must start.\n* **Overtime** - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul sho,t one player at a time. All ten players shoot. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n\nThe League Commissioner, will settle all disputes and rule interpretations. If Bill Nap or Steve Michelotti can’t be reached, the lead official will settle dispute or rules.",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 2027,
                "name": "8th Grade MS Varsity Saturday 2014-15 League",
                "isDirty": false,
                "homeScreen": "Use the nav bar at the top to view the schedule by team and schedule by location (as well as directions).\n\nThe league will play a 10-game regular season with the last game on February 28. The following week there will be a single-elimination playoff to determine the champion. For playoffs, we will do 3 different divisions for parity.\n\nAll questions should be directed towards your coach.\n\nHave a great season!\n\n**Inclement weather**: Inclement weather procedure depends on your location. Based on your game location, call one of these numbers:\n\n* Meadowbrook, Roger Carter, and North Laurel: 410-313-4452 (option 2)\n* One of the Howard County Schools: 410-313-6827\n* \n# Playoff Brackets\n\n## Division 1 Bracket\n![D1 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/sat-varsity-2015-d1.png)\n\n## Division 2 Bracket\n![D2 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/sat-varsity-2015-d2.png)",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n* The first team listed on the schedule is considered HOME and should wear white (light). Second team listed is away and wears dark jerseys.\n* Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n* **For games not at Meadowbrook, each team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.** Score table persons are provided at Meadowbrook.\n* 20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n* Two 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n* **Free Throw Bonus:** We’re trying to minimize wasting playing time shooting fouls shots while the clock runs.   \n**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul.  \n**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n* No pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n* 2 behavior related technical fouls result in removal from current and next game.\n* No technical fouls for book errors. Just correct the mistake and move on.\n* Teams can start game with 4 players. If you have 4 players available at game time, the game must start.\n* **Overtime** - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul sho,t one player at a time. All ten players shoot. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n\nThe League Commissioner, will settle all disputes and rule interpretations. If Bill Nap or Steve Michelotti can’t be reached, the lead official will settle dispute or rules.",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 3039,
                "name": "Ballin in Fall 2015 - Ricky Knight Memorial Tournament",
                "isDirty": false,
                "homeScreen": "**Use the tabs above to view the schedule, rules, standings etc**\n\n**Tournament Championship games are Sunday afternoon or evening**\n\t\t\t\t\t\n- \t**4th grade Champion: WHC Force 27 - 24 over Stealth**\n- \t**5th grade Champion:  Savage, 36 - 26 over MADE**\n- \t**6th grade Champion: WHC Force Black, 38 - 31 over MD Sharks**\n- \t**7th grade Green Champion: DMV Stags, 60 - 39 over HC Elite Green**\n- \t**7th grade Champion Blue/White: Monocacy 44-36 over Savage**\n- \t**8th grade Green Champion, Pikesville: 45 - 38 over Ravens - Swartz**\n- \t**8th grade White Champion:  Mt View 52 - 41 over Glenwood**\n",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- The 1st team listed on the schedule is Home and wears White.  The 2nd team is Away and wears Dark.  \n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half. \n- No 1-and-1 bonus in 1st half, but still shoot 2 shot bonus at 10 fouls. \n- Shoot normal 1-and-1 bonus at 7 fouls in Second half. \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\n<br/>The following will be used to determine top two teams for the Championship game:\n<br/>- Overall Record (Wins vs. Losses)\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n<br/>- Record vs Teams tied. \n<br/>- Point Differential vs Teams tied (max 15 points per game)\n<br/>- Overall Point Differential (max 15 point per game)\n<br/>- Coin Flip\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 2036,
                "name": "Friday Spring 2015 13U HCMS",
                "isDirty": false,
                "homeScreen": null,
                "rulesScreen": "Friday 7th Grade Harpers Choice MS league Spring 2015\r\n\r\nThe first team listed on the schedule is HOME and should wear white (light.)\r\nSecond team listed is away and wears dark jerseys.\r\n\r\n- Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball unless two 6th grade teams are playing then they can select a 28.5 ball if they both agree. \r\n\r\n* Each team must provide a team representative at the scorer’s table for their game.  One team covers the book; the other team covers the clock.  \r\n\r\nHS Federation rules except where noted.\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n- 20 minute halves.  Running Clock except last 1 minute of first half, last 2 minutes of game and time outs.  \r\n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \r\n- Free Throw Bonus:\r\nWe’re trying to minimize wasting playing time shooting fouls shots while the clock runs. \r\n1st half , NO 1-n-1 bonus at 7 fouls.  2 shot bonus will be shot at 10th foul.  \r\n2nd Half, Similar to first half, except when we get to 2 minutes and are in “stop clock” mode.  With more than 2 minutes in the second half (running clock) we will only shoot a 2 shot bonus on the 10th foul – no 1 and 1 bonus at 7 fouls.  With 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.  \r\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1.  If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.  \r\n- No pressing or half-court trapping after lead reaches 20 points.  Team gets 2 warnings.  On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court. \r\n- 2 behavior related technical fouls result in removal from current and next game.\r\n- No technical fouls for book errors.  Just correct the mistake and move on.\r\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start. \r\n\r\n- Overtime – One 2 minute OT.  Teams get one additional timeout in OT, two maximum.\r\nIf still tied after one OT, game is over.  \r\n\r\nThe League Commissioner, will settle all disputes and rule interpretations.\r\nIf Bill Nap can’t be reached, the lead official will decide.\r\n\t\t\t\t\t\t\t\tBill Nap 410-258-4189\r\n\r\n",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 2037,
                "name": "Friday Spring 2015 13U LEMS",
                "isDirty": true,
                "homeScreen": null,
                "rulesScreen": "Friday 7th Grade LEMS league Spring 2015\r\n\r\n\r\nThe first team listed on the schedule is HOME and should wear white (light.)\r\nSecond team listed is away and wears dark jerseys.\r\n\r\n- Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball unless two 6th grade teams are playing then they can select a 28.5 ball if they both agree. \r\n\r\n* Each team must provide a team representative at the scorer’s table for their game.  One team covers the book; the other team covers the clock.  \r\n\r\nHS Federation rules except where noted.\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n- 20 minute halves.  Running Clock except last 1 minute of first half, last 2 minutes of game and time outs.  \r\n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \r\n- No pressing or half-court trapping after lead reaches 20 points.  Team gets 2 warnings.  On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court. \r\n- 2 behavior related technical fouls result in removal from current and next game.\r\n- No technical fouls for book errors.  Just correct the mistake and move on.\r\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start. \r\n\r\n- Overtime – One 2 minute OT.  Teams get one additional timeout in OT, two maximum.\r\nIf still tied after one OT, game is over.  \r\n\r\nThe League Commissioner, will settle all disputes and rule interpretations.\r\nIf Bill Nap can’t be reached, the lead official will decide.\r\n\t\t\t\t\t\t\t\tBill Nap 410-258-4189\r\n",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 2034,
                "name": "March Madness 2015 Tournament",
                "isDirty": false,
                "homeScreen": "**Championship Games:**\n\t\t\t\t\t\n- **6:30pm MAC ct 1: 13U Champions -  HC Elite 48 vs S MD Heat 37**\n- **6:30pm MAC ct 2: 11U Champions - Team Ultimate 59 - WDBA 51**\n- **6:30pm MAC ct 3: 12U Champions - VA Hurricanes 48 HC Elite Green 38**\n- **6:30pm MAC ct 4: 9U  Champions - Madison 22 - Sharks 15**\n- **7:30pm MAC ct 1: 17U Champions HC Elite White 68 Lake Shore 50**\n- **7:30pm MAC ct 2: 16U HC Elite 10th 54 HC Elite 9th 53**\n- **7:30pm MAC ct 3: 14U Champions - Columbia Ravens 47 HC Elite 41**\n- **7:30pm MAC ct 4: 15U Champions - Team Dedication 35  - Ravens 31**\n\n\n**Daily Admission:**\n\n- Friday:  $3.   \n- Saturday: $5. \n- Sunday: $5. ",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- The 1st team listed on the schedule is Home and wears White.  The 2nd team is Away and wears Dark.  \n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half. \n- No 1-and-1 bonus in 1st half, but still shoot 2 shot bonus at 10 fouls. \n- Shoot normal 1-and-1 bonus at 7 fouls in Second half. \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\n<br/>The following will be used to determine top two teams for the Championship game:\n<br/>- Overall Record (Wins vs. Losses)\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n<br/>- Record vs Teams tied. \n<br/>- Point Differential vs Teams tied (max 15 points per game)\n<br/>- Overall Point Differential (max 15 point per game)\n<br/>- Coin Flip\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 3041,
                "name": "March Madness Tournament 2016",
                "isDirty": false,
                "homeScreen": "<h2>Use the tabs above to view the schedule, rules, standings etc</h2> \n\nTournament Championship games are Sunday afternoon or evening\n\t\t\t\t\t\n- \t**3rd grade Champions: TEAM RUSH 34 - 28 over MADISON**\n- \t**4th grade Champions: Madison 30 - 24 over Team Melo**\n- \t**5th grade Champions: Ravens 5th 42 - 26 over 1 Up Warriors**\n- \t**6th grade Champions: Randallstown Running Rebels 44 - 31 over MD Playmakers**\n- \t**7th grade White Champions: MD Finest 52 - 37 over HC Elite white**\n- \t**7th grade-Green Champions: Sharks Red 33 - 32 overRavens Black**\n- \t**8th grade Champions: Madison 52 - 42 over HC Elite white**\n- \t**9th grade White Champions: Balt United Red 57 - 52 over AA Ballhawks**\n- \t**HS Champions: Franklin Force 10th 56 - 54 over Team Sizzle**",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- The 1st team listed on the schedule is Home and wears White.  The 2nd team is Away and wears Dark.  \n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half. \n- No 1-and-1 bonus in 1st half, but still shoot 2 shot bonus at 10 fouls. \n- Shoot normal 1-and-1 bonus at 7 fouls in Second half. \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\n<br/>The following will be used to determine top two teams for the Championship game:\n<br/>- Overall Record (Wins vs. Losses)\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n<br/>- Record vs Teams tied. \n<br/>- Point Differential vs Teams tied (max 15 points per game)\n<br/>- Overall Point Differential (max 15 point per game)\n<br/>- Coin Flip\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 2040,
                "name": "Metro Classic 2015 Tournament",
                "isDirty": false,
                "homeScreen": "**Use the tabs above to view the schedule, rules, standings etc**\n\n**Tournament Champions**\n\t\t\t\t\t\n- \t**9U Champions WVEP Warriors over HC Elite**\n- \t**10U Champions Randalstown Running Rebels over Sharks**\n- \t**12U Champions:  HC Elite White over BMore’s Finest**\n- \t**13U Champions:  HC Elite over Ravens**\n- \t**14U Champions: Ravens – Paugh over HC Elite - Phillips**\n- \t**15U Champions: Crusader Nation over MD 3D – Gielin**\n- \t**16U Champions:  Crusader Nation vs HC Elite - Tringali**\n- \t**17U Champions:  HC Elite over Crusader Nation 57-54**\n\n\n\n**Daily Admission:**\n\n- Friday:  $3.   \n- Saturday: $5. \n- Sunday: $5. ",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- The 1st team listed on the schedule is Home and wears White.  The 2nd team is Away and wears Dark.  \n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half. \n- No 1-and-1 bonus in 1st half, but still shoot 2 shot bonus at 10 fouls. \n- Shoot normal 1-and-1 bonus at 7 fouls in Second half. \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\n<br/>The following will be used to determine top two teams for the Championship game:\n<br/>- Overall Record (Wins vs. Losses)\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n<br/>- Record vs Teams tied. \n<br/>- Point Differential vs Teams tied (max 15 points per game)\n<br/>- Overall Point Differential (max 15 point per game)\n<br/>- Coin Flip\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 2039,
                "name": "Spring Fling 2015 Tournament",
                "isDirty": false,
                "homeScreen": "**Use the tabs above to view the schedule, rules, standings etc**\n\n**Sunday Championship Games: Championship Teams will be listed here and posted on site when determined**\n\t\t\t\t\t\n- **3pm NLCC 5 and NLCC 6:  9U Semis - (NLCC ct 5: Balt Supreme vs Perry Hall) and (NLCC ct 6: Ballerville vs HC Elite)**\n- **5pm NLCC 5: 9U  Champions - HC Elite  36 - 32 over Balt Supreme**\n- **6:15pm MAC ct 1: 15U Champions - Severn Elite 43-30 over Team Dedication**\n- **6:15pm MAC ct 2: 14U Black Div Champions - Ravens Chamblee 51-46 over Hoopmaster - BC**\n- **6:15pm MAC ct 3: 14U White-Green Champions -  DC Premier 44-30 over HC Elite - Hollwedel**\n- **6:15pm MAC ct 4: 11U Champions - MD Playmakers 50-42 over MADE Basketball**\n- **7:15pm MAC ct 1: 17U Championship not played**\n- **7:15pm MAC ct 2: 16U Champions - Advanced Hoops (PA) 56 - 42 over HC Elite - Tringali**\n- **7:15pm MAC ct 3: 12U Champions - MD Playmaker Red 48 -32 over MD Playmaker Black**\n- **7:15pm MAC ct 4: 13U Champios All City 34 - 30 over Carroll B-ball**\n\n\n**Daily Admission:**\n\n- Friday:  $3.   \n- Saturday: $5. \n- Sunday: $5. ",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- The 1st team listed on the schedule is Home and wears White.  The 2nd team is Away and wears Dark.  \n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half. \n- No 1-and-1 bonus in 1st half, but still shoot 2 shot bonus at 10 fouls. \n- Shoot normal 1-and-1 bonus at 7 fouls in Second half. \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\n<br/>The following will be used to determine top two teams for the Championship game:\n<br/>- Overall Record (Wins vs. Losses)\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n<br/>- Record vs Teams tied. \n<br/>- Point Differential vs Teams tied (max 15 points per game)\n<br/>- Overall Point Differential (max 15 point per game)\n<br/>- Coin Flip\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 2011,
                "name": "Summer Showdown 2014",
                "isDirty": false,
                "homeScreen": "**Select one of the tabs above to obtain various information about the tournament, in general, or your specific team, such as rules, the full tournament schedule, you team's schedule, direction, etc.** \n\n<br/>**Championship participants will be calculated throughout the tournament and posted below, on this page.  A hard copy will also be posted at each site and updated throughout the day Sunday. Be sure to press the refresh button on your device to ensure you are getting the most current updates.**  \n\n##Summer Showdown Tournament Sunday  Championship Games##\n\n###5th Grade Championship Game moved to 5:15pm###\n\n<br/>**5th Grade Championship Game. 5:15pm, MAC court 3**\n<br>1st Place  **HC Elite  vs**      2nd Place **Winchester Rising Stars**\n<br/> **5th Grade Champions:   Winner  -  Score **\n\n<br/>**6th Grade Championship Game.  4:15pm, MAC court 3**\n<br>1st Place: Green Division **CBSA Hoyas  vs**  1st Place White Division: **HC Elite - Michelotti**\n<br/>**6th Grade Champions: Winner  -  Score**\n\n<br/>**7th Grade Championship Game.  4:15pm, MAC court 2**\n<br>1st Place   **MADE Elite  vs**  2nd Place:  **HC Elite - Phillips** \n<br/> **7th Grade Champions:  Winner  -  Score**\n\n<br/>**8th Grade Championship Game. 5:15pm, MAC court 4.**\n<br>1st Place  **HC Elite - Eudell  vs**  2nd Place  **Peake Terps**\n<br/> **8th Grade Champions:  Winner  -  Score**\n\n<br/>**9th Grade Championship Game. 4:15pm, MAC court 4**\n<br>1st Place  **HC Elite - Thai  vs**  2nd Place: **Unfinished Business**\n<br/>**9th Grade Green/White Champions  :  Winner  -  Score**\n\n<br/>**10th Grade Championship Game. 4:15pm MAC court 1**\n<br>1st Place: **HC Elite - Stefan  vs**  2nd Place: **HC Elite - Clark**\n<br/>**10th Grade Champions : Winner  -  Score**\n\n<br/>**11th Grade Championship Game.  5:15pm MAC court 1.**\n<br>1st Place: **HC Elite - DNap  vs**  2nd Place S River Shooters**\n<br/> **11th Grade Champions:   HC Elite DNap  -  51 - 39**\n\n",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\nThe following will be used to determine top two teams for the Championship game:\n- Overall Record (Wins vs. Losses)\n-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n-Record vs Teams tied. \n- Point Differential vs Teams tied\n- Overall Point Differential \n- Coin Flip\n*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*\n",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 3037,
                "name": "Summer Showdown 2015 Tournament",
                "isDirty": false,
                "homeScreen": "**Use the tabs above to view the Full Schedule, Team Schedule, Rules, standings etc**\n\n**Once it is determined, the Teams who make it to the Championship Games will be listed below**\n\t\t\t\t\t\n- \t**11U Champions:  Sharks 44 - 27 over WV Lights Outk**\n- \t**12U Champions:  HC Elite 60-29 over Team Attack**\n- \t**13U Champions:  NOVA 94 Feet Orange  38 - 29 over Central MD Shockers**\n- \t**14U Champions:  Severn Elite 56 - 27 over HC Elite - Michelotti**\n-\t**15U Champions:  Fairfax Stars 48 - 43 over Carroll Basketball Club** \t\n-\t**16U Champions:  Millersville Blue Devils 57-44 over Loudon Xtreme**\n-\t**17U Champions:  HC Elite 64 - 49 over Hoop Guru**\n\n**Daily Admission:**\n\n- Friday:  $3.   \n- Saturday: $5. \n- Sunday: $5. ",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- The 1st team listed on the schedule is Home and wears White.  The 2nd team is Away and wears Dark.  \n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half. \n- No 1-and-1 bonus in 1st half, but still shoot 2 shot bonus at 10 fouls. \n- Shoot normal 1-and-1 bonus at 7 fouls in Second half. \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\n<br/>The following will be used to determine top two teams for the Championship game:\n<br/>- Overall Record (Wins vs. Losses)\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n<br/>- Record vs Teams tied. \n<br/>- Point Differential vs Teams tied (max 15 points per game)\n<br/>- Overall Point Differential (max 15 point per game)\n<br/>- Coin Flip\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*",
                "isArchived": false,
                "isActive": true
            }
        ];
        var leagueData = {
            "league": {
              "name": "6th Grade Saturday 2014-15 League",
              "id": 2029,
              "homeScreen": "Use the nav bar at the top to view the schedule by team and schedule by location (as well as directions).\n\n*\tThis League is designed for 6th Grade “B” Travel teams, and higher-level 5th Grade AAU caliber teams.\n*\t8 game minimum (will try to get 9 games scheduled if possible) plus/season ending tournament.  Plan is to end on February 28th.\n*\tSeason to start December 13th.\n*\tGames to be played at Centennial High School.\n*\tGame times 2pm and later.\n*\tMinimum 6 teams required.\n*\t$635 per team registration fee (includes referees fees).\n*\tAwards for 1st & 2nd Place in season ending tournament.\n*\t**All teams will be required to submit team rosters prior to the first game of the season.  Players must be in 5th/6th Grade and/or born after August 31, 2002.**\n\nHave a great season!\n\n**Inclement weather**: Inclement weather procedure depends on your location. Based on your game location, call:\n\n* Inclement Weather Hotline for Howard County Schools: 410-313-6827",
              "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n\n*\tThe first team listed (under V) on the schedule is considered VISITORS and should wear Dark Jerseys. Second team listed (under H) is HOME and wears White (light) jerseys.\n*\tHome Team Provides game Ball – It should be a NFHS approved 28.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n*\tEach team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.\n*\t20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n*\tTwo 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n*\t**Free Throw Bonus**: We’re trying to minimize wasting playing time shooting fouls shots while the clock runs. \n*\t**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul. \n*\t**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls. So if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n*\tNo pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n*\t2 behavior related technical fouls result in removal from current and next game.\n*\tNo technical fouls for book errors. Just correct the mistake and move on.\n*\tTeams can start game with 4 players. If you have 4 players available at game time, the game must start.\n*\tOvertime - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul shot, one player at a time. All ten players shoot. If one team has made more shots than the other team after 10 shots, that team wins. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n*\tThe League Commissioner, Chris Steinbach (410-924-4324) will settle all disputes and rule interpretations. If Chris can’t be reached, the lead official will settle disputes or rules interpretations."
            },
            "teams": [
              {
                "divisionName": null,
                "divisionTeams": [
                  {
                    "id": 5937,
                    "name": "Laurel Lakers",
                    "coach": "Murray"
                  },
                  {
                    "id": 5934,
                    "name": "Playmakers (5th AAU)",
                    "coach": "Pulliam"
                  },
                  {
                    "id": 5939,
                    "name": "Playmakers (Wk 1 Substitute)",
                    "coach": ""
                  },
                  {
                    "id": 5932,
                    "name": "Sharks Blue",
                    "coach": "Steinbach"
                  },
                  {
                    "id": 5938,
                    "name": "Sharks Red (5th AAU)",
                    "coach": "Tookes"
                  },
                  {
                    "id": 5931,
                    "name": "Sharks White",
                    "coach": "Steinbach"
                  },
                  {
                    "id": 5933,
                    "name": "Volt",
                    "coach": "Treacy"
                  },
                  {
                    "id": 5936,
                    "name": "WHC Attack",
                    "coach": "Hennggeler"
                  },
                  {
                    "id": 5935,
                    "name": "WHC Orange",
                    "coach": "Glagola"
                  }
                ]
              }
            ],
            "locations": [
              {
                "id": 1007,
                "name": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "address": "4300 Centennial Ln, Ellicott City, MD",
                "latitude": 39.25,
                "longitude": -76.86
              },
              {
                "id": 1008,
                "name": "Harper's Choice MS",
                "locationUrl": "http://goo.gl/maps/DeZcz",
                "address": "5450 Beaverkill Rd, Columbia, MD 21044",
                "latitude": 39.22,
                "longitude": -76.88
              }
            ],
            "games": [
              {
                "id": 8889,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks White",
                "team1Id": 5931,
                "team2": "Playmakers (Wk 1 Substitute)",
                "team2Id": 5939,
                "team1Score": "38",
                "team2Score": "19",
                "time": "2014-12-13T14:15:00"
              },
              {
                "id": 8890,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks Red (5th AAU)",
                "team1Id": 5938,
                "team2": "WHC Orange",
                "team2Id": 5935,
                "team1Score": "32",
                "team2Score": "28",
                "time": "2014-12-13T15:15:00"
              },
              {
                "id": 8891,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks Blue",
                "team1Id": 5932,
                "team2": "Volt",
                "team2Id": 5933,
                "team1Score": "26",
                "team2Score": "37",
                "time": "2014-12-13T16:15:00"
              },
              {
                "id": 8892,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Laurel Lakers",
                "team1Id": 5937,
                "team2": "WHC Attack",
                "team2Id": 5936,
                "team1Score": "39",
                "team2Score": "40",
                "time": "2014-12-13T17:15:00"
              },
              {
                "id": 8893,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks Red (5th AAU)",
                "team1Id": 5938,
                "team2": "WHC Attack",
                "team2Id": 5936,
                "team1Score": "42",
                "team2Score": "24",
                "time": "2014-12-20T14:15:00"
              },
              {
                "id": 8894,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "WHC Orange",
                "team1Id": 5935,
                "team2": "Sharks Blue",
                "team2Id": 5932,
                "team1Score": "31",
                "team2Score": "27",
                "time": "2014-12-20T15:15:00"
              },
              {
                "id": 8895,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks White",
                "team1Id": 5931,
                "team2": "Laurel Lakers",
                "team2Id": 5937,
                "team1Score": "53",
                "team2Score": "19",
                "time": "2014-12-20T16:15:00"
              },
              {
                "id": 8896,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Volt",
                "team1Id": 5933,
                "team2": "Playmakers (5th AAU)",
                "team2Id": 5934,
                "team1Score": "14",
                "team2Score": "24",
                "time": "2014-12-20T17:15:00"
              },
              {
                "id": 8897,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Playmakers (5th AAU)",
                "team1Id": 5934,
                "team2": "Laurel Lakers",
                "team2Id": 5937,
                "team1Score": "37",
                "team2Score": "22",
                "time": "2015-01-10T14:15:00"
              },
              {
                "id": 8898,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks Blue",
                "team1Id": 5932,
                "team2": "Sharks Red (5th AAU)",
                "team2Id": 5938,
                "team1Score": "35",
                "team2Score": "28",
                "time": "2015-01-10T15:15:00"
              },
              {
                "id": 8899,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Volt",
                "team1Id": 5933,
                "team2": "WHC Attack",
                "team2Id": 5936,
                "team1Score": "36",
                "team2Score": "33",
                "time": "2015-01-10T16:15:00"
              },
              {
                "id": 8900,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks White",
                "team1Id": 5931,
                "team2": "WHC Orange",
                "team2Id": 5935,
                "team1Score": "36",
                "team2Score": "22",
                "time": "2015-01-10T17:15:00"
              },
              {
                "id": 8901,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Volt",
                "team1Id": 5933,
                "team2": "Sharks White",
                "team2Id": 5931,
                "team1Score": "20",
                "team2Score": "17",
                "time": "2015-01-17T14:15:00"
              },
              {
                "id": 8902,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Playmakers (5th AAU)",
                "team1Id": 5934,
                "team2": "WHC Orange",
                "team2Id": 5935,
                "team1Score": "46",
                "team2Score": "33",
                "time": "2015-01-17T15:15:00"
              },
              {
                "id": 8903,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks Blue",
                "team1Id": 5932,
                "team2": "WHC Attack",
                "team2Id": 5936,
                "team1Score": "27",
                "team2Score": "29",
                "time": "2015-01-17T16:15:00"
              },
              {
                "id": 8904,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks Red (5th AAU)",
                "team1Id": 5938,
                "team2": "Laurel Lakers",
                "team2Id": 5937,
                "team1Score": "25",
                "team2Score": "24",
                "time": "2015-01-17T17:15:00"
              },
              {
                "id": 8905,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "WHC Orange",
                "team1Id": 5935,
                "team2": "Volt",
                "team2Id": 5933,
                "team1Score": "29",
                "team2Score": "28",
                "time": "2015-01-24T14:15:00"
              },
              {
                "id": 8906,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks Red (5th AAU)",
                "team1Id": 5938,
                "team2": "Sharks White",
                "team2Id": 5931,
                "team1Score": "20",
                "team2Score": "33",
                "time": "2015-01-24T15:15:00"
              },
              {
                "id": 8907,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Laurel Lakers",
                "team1Id": 5937,
                "team2": "Sharks Blue",
                "team2Id": 5932,
                "team1Score": "44",
                "team2Score": "33",
                "time": "2015-01-24T16:15:00"
              },
              {
                "id": 8908,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "WHC Attack",
                "team1Id": 5936,
                "team2": "Playmakers (5th AAU)",
                "team2Id": 5934,
                "team1Score": "37",
                "team2Score": "44",
                "time": "2015-01-24T17:15:00"
              },
              {
                "id": 8909,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "WHC Attack",
                "team1Id": 5936,
                "team2": "WHC Orange",
                "team2Id": 5935,
                "team1Score": "42",
                "team2Score": "24",
                "time": "2015-01-31T14:15:00"
              },
              {
                "id": 8910,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Laurel Lakers",
                "team1Id": 5937,
                "team2": "Volt",
                "team2Id": 5933,
                "team1Score": "41",
                "team2Score": "25",
                "time": "2015-01-31T15:15:00"
              },
              {
                "id": 8911,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks Red (5th AAU)",
                "team1Id": 5938,
                "team2": "Playmakers (5th AAU)",
                "team2Id": 5934,
                "team1Score": "20",
                "team2Score": "27",
                "time": "2015-01-31T16:15:00"
              },
              {
                "id": 8912,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks White",
                "team1Id": 5931,
                "team2": "Sharks Blue",
                "team2Id": 5932,
                "team1Score": "49",
                "team2Score": "38",
                "time": "2015-01-31T17:15:00"
              },
              {
                "id": 8913,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "WHC Attack",
                "team1Id": 5936,
                "team2": "Sharks White",
                "team2Id": 5931,
                "team1Score": "42",
                "team2Score": "55",
                "time": "2015-02-07T14:15:00"
              },
              {
                "id": 8914,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Playmakers (5th AAU)",
                "team1Id": 5934,
                "team2": "Sharks Blue",
                "team2Id": 5932,
                "team1Score": "30",
                "team2Score": "20",
                "time": "2015-02-07T15:15:00"
              },
              {
                "id": 8915,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Laurel Lakers",
                "team1Id": 5937,
                "team2": "WHC Orange",
                "team2Id": 5935,
                "team1Score": "35",
                "team2Score": "46",
                "time": "2015-02-07T16:15:00"
              },
              {
                "id": 8920,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks Red (5th AAU)",
                "team1Id": 5938,
                "team2": "Volt",
                "team2Id": 5933,
                "team1Score": "43",
                "team2Score": "42",
                "time": "2015-02-07T17:15:00"
              },
              {
                "id": 8917,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks Red (5th AAU)",
                "team1Id": 5938,
                "team2": "WHC Orange",
                "team2Id": 5935,
                "team1Score": "34",
                "team2Score": "31",
                "time": "2015-02-14T14:15:00"
              },
              {
                "id": 8918,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks Blue",
                "team1Id": 5932,
                "team2": "Volt",
                "team2Id": 5933,
                "team1Score": "26",
                "team2Score": "37",
                "time": "2015-02-14T15:15:00"
              },
              {
                "id": 8919,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks White",
                "team1Id": 5931,
                "team2": "Playmakers (5th AAU)",
                "team2Id": 5934,
                "team1Score": "32",
                "team2Score": "36",
                "time": "2015-02-14T16:15:00"
              },
              {
                "id": 8921,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Laurel Lakers",
                "team1Id": 5937,
                "team2": "WHC Attack",
                "team2Id": 5936,
                "team1Score": "42",
                "team2Score": "41",
                "time": "2015-02-14T17:15:00"
              },
              {
                "id": 11389,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks White",
                "team1Id": 5931,
                "team2": "WHC Orange",
                "team2Id": 5935,
                "team1Score": "35",
                "team2Score": "27",
                "time": "2015-02-28T16:15:00"
              },
              {
                "id": 11390,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Playmakers (5th AAU)",
                "team1Id": 5934,
                "team2": "Sharks Blue",
                "team2Id": 5932,
                "team1Score": "35",
                "team2Score": "30",
                "time": "2015-02-28T17:15:00"
              },
              {
                "id": 11391,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks Red (5th AAU)",
                "team1Id": 5938,
                "team2": "Laurel Lakers",
                "team2Id": 5937,
                "team1Score": "32",
                "team2Score": "35",
                "time": "2015-02-28T18:15:00"
              },
              {
                "id": 11392,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Volt",
                "team1Id": 5933,
                "team2": "WHC Attack",
                "team2Id": 5936,
                "team1Score": "27",
                "team2Score": "25",
                "time": "2015-02-28T19:15:00"
              },
              {
                "id": 11393,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Playmakers (5th AAU)",
                "team1Id": 5934,
                "team2": "Volt",
                "team2Id": 5933,
                "team1Score": "37",
                "team2Score": "32",
                "time": "2015-03-07T17:00:00"
              },
              {
                "id": 11394,
                "location": "Centennial HS",
                "locationUrl": "http://goo.gl/maps/9N21B",
                "locationId": 1007,
                "team1": "Sharks White",
                "team1Id": 5931,
                "team2": "Laurel Lakers",
                "team2Id": 5937,
                "team1Score": "38",
                "team2Score": "34",
                "time": "2015-03-07T18:00:00"
              },
              {
                "id": 11397,
                "location": "Harper's Choice MS",
                "locationUrl": "http://goo.gl/maps/DeZcz",
                "locationId": 1008,
                "team1": "Playmakers (5th AAU)",
                "team1Id": 5934,
                "team2": "Sharks White",
                "team2Id": 5931,
                "team1Score": "32",
                "team2Score": "27",
                "time": "2015-03-07T19:00:00"
              }
            ],
            "standings": [
              {
                "divisionName": null,
                "divisionStandings": [
                  {
                    "teamId": 5934,
                    "teamName": "Playmakers (5th AAU)",
                    "wins": 10,
                    "losses": 0,
                    "winningPct": "1.000",
                    "pointsFor": 348,
                    "pointsAgainst": 267,
                    "pointsDiff": 81
                  },
                  {
                    "teamId": 5931,
                    "teamName": "Sharks White",
                    "wins": 8,
                    "losses": 3,
                    "winningPct": ".727",
                    "pointsFor": 413,
                    "pointsAgainst": 309,
                    "pointsDiff": 104
                  },
                  {
                    "teamId": 5938,
                    "teamName": "Sharks Red (5th AAU)",
                    "wins": 5,
                    "losses": 4,
                    "winningPct": ".556",
                    "pointsFor": 276,
                    "pointsAgainst": 279,
                    "pointsDiff": -3
                  },
                  {
                    "teamId": 5933,
                    "teamName": "Volt",
                    "wins": 5,
                    "losses": 5,
                    "winningPct": ".500",
                    "pointsFor": 298,
                    "pointsAgainst": 301,
                    "pointsDiff": -3
                  },
                  {
                    "teamId": 5937,
                    "teamName": "Laurel Lakers",
                    "wins": 4,
                    "losses": 6,
                    "winningPct": ".400",
                    "pointsFor": 335,
                    "pointsAgainst": 370,
                    "pointsDiff": -35
                  },
                  {
                    "teamId": 5936,
                    "teamName": "WHC Attack",
                    "wins": 3,
                    "losses": 6,
                    "winningPct": ".333",
                    "pointsFor": 313,
                    "pointsAgainst": 336,
                    "pointsDiff": -23
                  },
                  {
                    "teamId": 5935,
                    "teamName": "WHC Orange",
                    "wins": 3,
                    "losses": 6,
                    "winningPct": ".333",
                    "pointsFor": 271,
                    "pointsAgainst": 315,
                    "pointsDiff": -44
                  },
                  {
                    "teamId": 5932,
                    "teamName": "Sharks Blue",
                    "wins": 1,
                    "losses": 8,
                    "winningPct": ".111",
                    "pointsFor": 262,
                    "pointsAgainst": 320,
                    "pointsDiff": -58
                  },
                  {
                    "teamId": 5939,
                    "teamName": "Playmakers (Wk 1 Substitute)",
                    "wins": 0,
                    "losses": 1,
                    "winningPct": ".000",
                    "pointsFor": 19,
                    "pointsAgainst": 38,
                    "pointsDiff": -19
                  }
                ]
              }
            ]
          };

        function getLeagues(){
            return leagues;
        }

        function getLeagueData(){
            return leagueData;
        }
          
        return {
            getLeagues:getLeagues,
            getLeagueData:getLeagueData
        };
    }

})();