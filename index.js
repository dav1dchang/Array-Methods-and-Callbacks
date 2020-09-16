import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final */

const wcFinal = fifaData.filter(function(item){

        return item.Year === 2014 && item.Stage === "Final"

      });

console.log(wcFinal[0]['Home Team Name']);

/* (b) Away Team name for 2014 world cup final */

console.log(wcFinal[0]['Away Team Name'])

/* (c) Home Team goals for 2014 world cup final */

console.log(wcFinal[0]['Home Team Goals'])

/* (d) Away Team goals for 2014 world cup final */

console.log(wcFinal[0]['Away Team Goals'])

/* (e) Winner of 2014 world cup final */

function whoWon(homeTeam, awayTeam){
    if (homeTeam === awayTeam){
        return ('Game was tied');
    } else if (homeTeam > awayTeam){
        return `${homeTeam} won`;
    } else if (awayTeam > homeTeam){
        return `${awayTeam} won`;
    }
}//function

console.log(whoWon(wcFinal[0]['Home Team Name'], wcFinal[0]['Away Team Name']));

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data){

    let finals = data.filter(function(item){

        return (item.Stage === "Final")
    
    });//finals

    return finals

}//getFinals

console.log(getFinals(fifaData))//invoking function

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cbFunction) {

    let years = cbFunction.map(function(item){

        return item.Year;
    
    });//years

    return years

};//function getYears

console.log(getYears(getFinals(fifaData)))//invoking function

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cbFunction) {

    let finalsWinners = cbFunction.map(function(item){

        if (item['Home Team Goals'] > item['Away Team Goals']){
            return item['Home Team Name'];
        } else if (item['Home Team Goals'] < item['Away Team Goals']){
            return item['Away Team Name'];
        } else if (item['Home Team Goals'] === item['Away Team Goals']){
            return ('Game was tied');
        }

    });//cbFunction

    return finalsWinners

};//getWinners

console.log(getWinners(getFinals(fifaData)));//invoking function


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbFunction1, cbFunction2) {

    const finalsWinnersByYear = [];

        for (let i = 0; i < cbFunction1.length; i++){

            finalsWinnersByYear.push(`In ${cbFunction2[i]}, ${cbFunction1[i]} won the world cup!`)

        }//for

    return finalsWinnersByYear;

};//getWinnersByYear

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

//function getAverageGoals(data) {

    //let totalGoals = data.reduce(function(total, item){

        //return total += item['Home Team Goals'], total += item['Away Team Goals'];

    //},0);//totalGoals
    
   // return totalGoals

//};//getAverageGoals

//console.log(getAverageGoals(fifaData));

//potentially another route to solving problem?

function getAverageGoals(data) {

    let homeGoals = data.reduce(function(total, item){

        return total += item['Home Team Goals'];
    
    },0);
    
    let awayGoals = data.reduce(function(total, item){

        return total += item['Away Team Goals'];

    },0);

    return `Home team averaged ${(homeGoals/data.length)} goals per match and the away team averaged ${awayGoals/data.length} goals per match`
    
};//getAverageGoals

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
