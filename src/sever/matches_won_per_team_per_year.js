
function matches_won_per_team_per_year(matches){

let obj={}
for(let data of matches){
    if(!obj[data.season]){
        obj[data.season]={}
    }if(!obj[data.season][data.winner]){
        obj[data.season][data.winner]=1
    }else{
        obj[data.season][data.winner]=(obj[data.season][data.winner]||0)+1
    }
        
    }
    return obj
}


module.exports={
    matches_won_per_team_per_year
 
 }