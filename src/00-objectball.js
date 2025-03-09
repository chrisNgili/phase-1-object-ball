function gameObject(){
    return{
        home:{
            teamName:"Brooklyn Nets",
            colors:['Black', 'White'],
            players:{
                "Alan Anderson":{
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1,
                },
                "Reggie Evans":{
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7,
                },
                "Brook Lopez":{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15,
                },
                "Mason Plumlee":{
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5,
                },
                "Jason Terry":{
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1
                }
    
            }
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:["Turquoise","Purple"],
            players:{
                "Jeff Adrien":{
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2,
                },
                "Bismak Biyombo":{
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10,
                },
                "DeSagna Diop":{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5,
                },
                "Ben Gordon":{
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0,
                },
                "Brendan Haywood":{
                    number:33,
                    shoe:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12,
                }
            }
        },
    }
}
console.log(gameObject())

function numPointScored(playerName){
    let game =gameObject();
    for (let team in game){
        if(game[team].players[playerName]){
            return game[team].players[playerName].points
        }
    }
}

function shoeSize(playerName){
    let game =gameObject();
    for (let team in game){
        if (game[team].players[playerName]){
            return game[team].players[playerName].shoe
        }
    }
}

function teamColors(teamName){
    let game =gameObject();
    for (let team in game){
        if (game[team].teamName === teamName){
            return game[team].colors
        }
    }
}

function teamNames(){
    let game =gameObject();
    let teams = [];
    for (let team in game){
        if(game[team].teamName){
            teams.push(game[team].teamName)
        }
    }return teams
}
function playerNumbers(teamName){
    let game = gameObject();
    let jerseys = [];
    for(let team in game){
        if (game[team].teamName === teamName){
            for (let player in game[team].players){
                jerseys.push(game[team].players[player].number)
            }
        }
    }return jerseys;
}

function playerStats(playerName){
    let game = gameObject();
    for (let team in game){
        if (game[team].players[playerName]){
            return game[team].players[playerName]
        }
    }
}

function bigShoeRebounds(){
    let game = gameObject();
    let bigShoe = 0
    let rebound = 0

    for ( let team in game){
        for(let player in game[team].players){
            if (game[team].players[player].shoe > bigShoe){
                bigShoe = game[team].players[player].shoe;
                rebound = game[team].players[player].rebounds
            }
        }
    }return rebound
}

function mostPointsScored(){
    let game = gameObject();
    let point = 0;
    let name = ""
    for (let team in game){
        for (let player in game[team].players){
            if(game[team].players[player].points > point){
                point = game[team].players[player].points
                name = player
            }
        }
    }return name
}

function winningTeam(){
    let game = gameObject();
    let teamPoints = 0;
    let winners = ''
    for (let team in game){
        for (let player in game[team].players){
            if (game[team].players[player].points){
                teamPoints += game[team].players[player].points
                winners= game[team].teamName
            }
        }
    }return winners
}

function playerWithTheLongestName(){
    let game = gameObject();
    let longName=0
    let longest = ""

    for(let team in game){
        for (let player in game[team].players){
            if(player.length > longName){
                longName = player.length
                longest = player
            }
        }
    }return longest
}

function doesLongNameStealATon(){
    let game = gameObject()
    let longName = 0
    let longest = ""
    let mostSteals = 0
    let robber =''

    for(let team in game){
        for (let player in game[team].players){
            if(player.length > longName){
                longName = player.length
                longest = player
            }
        }
    }
    for (let team in game){
        for (let player in game[team].players){
            if (game[team].players[player].steals > mostSteals){
                mostSteals = game[team].players[player].steals
                robber = player;
            }
        }
    } return longest === robber     
}
