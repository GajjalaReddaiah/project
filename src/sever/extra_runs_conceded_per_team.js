

//const deliveries = require("../deliveries.json");
// function extra_runs_conceded_per_team(matches, deliveries){

// let obj={}
// for(let data of matches){
//     if(data.season=="2016"){
//         for(let runs of deliveries){
//             if(data.id==runs.match_id && runs.bowling_team){
//                 if(obj[runs.bowling_team]===undefined){
//                     obj[runs.bowling_team]=0
//                 }else{
//                     obj[runs.bowling_team]+=Number(runs.extra_runs)
//                 }
                
//             }
//         }
//     }

// }
// return obj
// }
// module.exports={
//     extra_runs_conceded_per_team
 
//  }

function calculateExtraRunsConcededIn2016(matchesData, deliveriesData) {
    // Filter the matches for the year 2016
    const matches2016 = matchesData.filter((match) =>
      match.season.includes("2016")
    );
  
    // Extract match IDs for the year 2016
    const matchIds2016 = matches2016.map((match) => match.id);
  
    // Calculate extra runs conceded per team
    const extraRunsConceded = deliveriesData.reduce((acc, delivery) => {
      if (matchIds2016.includes(delivery.match_id)) {
        const team = delivery.bowling_team;
        const extraRuns = parseInt(delivery.extra_runs, 10) || 0;
  
        acc[team] = (acc[team] || 0) + extraRuns;
      }
      return acc;
    }, {});
  
    return extraRunsConceded;
  }
  
  module.exports = { calculateExtraRunsConcededIn2016 };
   
