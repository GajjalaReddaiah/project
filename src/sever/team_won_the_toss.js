//Find the number of times each team won the toss and also won the match


function team_won_the_toss(matches){


let totalwins={}
for(let wontosses of matches){
    if(!totalwins[wontosses.toss_winner]){
        totalwins[wontosses.toss_winner]={wontosseachteam:0,winmatches:0}
    }
        totalwins[wontosses.toss_winner].wontosseachteam +=1

    if(wontosses.toss_winner== wontosses.winner){
        totalwins[wontosses.toss_winner].winmatches +=1


    }
}
return totalwins
}

module.exports={
    team_won_the_toss
 
 }